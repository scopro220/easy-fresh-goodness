const express = require("express");

const app = express();

require("./searchRoutes")(app);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"));

//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "src", "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app