const Company = require("../../model/company");

exports.createCompany = async (req, res) => {
  const { title, register } = req.body;

  try {
    if (!title || !register) {
      return res.status(400).json({
        success: false,
        error: "Компанийн мэдээлэлийг бүрэн оруулах шаардлагатай",
      });
    }
    let existingCompany = await Company.findOne({ where: { title } });

    if (existingCompany) {
      return res
        .status(400)
        .json({ error: "Company with this title already exists" });
    }
    const newCompany = await Company.create({
      title: title,
      createdAt: new Date(),
    });

    return res.status(201).json({
      success: true,
      data: newCompany,
    });
  } catch (error) {
    console.error("Error creating company:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
