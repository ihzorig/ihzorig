const Offices = require("../../models/office");
const Company = require("../../models/company");

module.exports.createOffice = async (req, res) => {
  const { companyName, address } = req.body;

  try {
    // Check if required fields are provided
    if (!companyName || !address) {
      return res.status(400).json({
        success: false,
        error: "Та оффисийн мэдээллийг бүрэн оруулах шаардлагатай.",
      });
    }
    const company = await Company.findOne({ where: { name: companyName } });
    if (!company) {
      return res.status(400).json({
        success: false,
        error: "Бүртгэлгүй компани байна.",
      });
    }

    // Check if office with same address already exists
    const existingOffice = await Offices.findOne({
      where: { companyName, address },
    });
    if (existingOffice) {
      return res.status(400).json({
        success: false,
        error: "Бүртгэлтэй оффисийн хаяг байна.",
      });
    }

    // Check if the company exists

    // Create new office
    const newOffice = await Offices.create({
      companyName: companyName,
      address: address,
      createdAt: new Date(),
      updatedAt: new Date(), // Ensure updatedAt is set as well
    });

    return res.status(200).json({
      success: true,
      data: newOffice,
    });
  } catch (err) {
    console.error("Error creating office:", err);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

module.exports.getOffices = async (req, res) => {
  try {
    const offices = await Offices.findAll();
    if (!offices) {
      return res.status(400).json({
        success: false,
        err: "Бүртгэлтэй оффис байхгүй байна.",
      });
    }
    return res.status(200).json({
      success: true,
      data: offices,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      err,
    });
  }
};
