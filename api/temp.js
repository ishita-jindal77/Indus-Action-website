// app.get("/findSchemes", async (req, res) => {
//     const { age, income, caste, religion, maritalStatus, houseOwned } = req.body;
//     try {
//       const applicableSchemes = await Scheme.find({
//         $and: [
//           { ageGroup: { $gte: age || 0 } }, // Filter if age is provided
//           { income: { $gte: income || 0 } }, // Filter if income is provided
//           { casteApplicable: caste || { $exists: true } }, // Filter if caste is provided
//           { religionApplicable: religion || { $exists: true } }, // Filter if religion is provided
//           { maritalStatus: maritalStatus || { $exists: true } }, // Filter if maritalStatus is provided
//           // { houseOwned: houseOwned || { $exists: true } }, // Filter if houseOwned is provided
//         ],
//       });
//       console.log(applicableSchemes);
//       res.status(200).json(applicableSchemes);
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "Error finding applicable schemes", error });
//     }
//   });
  
//   app.post("/addSchemes", async (req, res) => {
//     try {
//       const newScheme = await Scheme.create({
//         name: req.body.name,
//         region: req.body.region,
//         income: req.body.income,
//         ageGroup: req.body.ageGroup,
//         casteApplicable: req.body.casteApplicable,
//         religionApplicable: req.body.religionApplicable,
//         description: req.body.description,
//         maritalStatus: req.body.maritalStatus,
//       });
//       res.status(201).json(newScheme);
//     } catch (error) {
//       res.status(500).json({ message: "Error creating scheme", error });
//     }
//   });