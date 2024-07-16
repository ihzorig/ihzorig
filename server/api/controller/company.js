const { error } = require("winston");
const Company = require("../../models/company");

exports.createCompany = async (req, res) => {
  const { name, register } = req.body;

  try {
    if (!name || !register) {
      return res.status(400).json({
        success: false,
        error: "Компанийн мэдээлэлийг бүрэн оруулах шаардлагатай",
      });
    }
    let existingCompany = await Company.findOne({ where: { name } });

    if (existingCompany) {
      return res.status(400).json({
        success: false,
        error: "Энэ компани нэр бүртгэгдсэн байна.",
      });
    }
    let isCompany = await Company.findOne({ where: { register } });
    if (isCompany) {
      return res.status(400).json({
        success: false,
        error: "Ригестрийн дугаар бүртгэлтэй байна.",
      });
    }

    const newCompany = await Company.create({
      name: name,
      register: register,
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
module.exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    if (!companies) {
      return res.status(404).json({
        success: false,
        error: "Бүртгэлтэй компани байхгүй байна.",
      }); 
    }
    return res.status(200).json({
      success: true,
      data: companies,
    });
  } catch (err) {
    req.status(500).json({
      success: false,
      err,
    });
  }
};
