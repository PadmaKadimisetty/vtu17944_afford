
/*import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { numbers: [] });
});

app.post("/", async (req, res) => {
  const userInput = req.body.urls;
  let mergedIntegers = [];

  if (userInput.startsWith("http")) {
    const urls = userInput.split(',').map(url => url.trim());
    mergedIntegers = await fetchIntegersFromUrls(urls);
  } else {
    const numbers = userInput.split(',').map(number => parseInt(number.trim()));
    mergedIntegers = numbers;
  }

  res.render("index.ejs", { numbers: mergedIntegers });
});

async function fetchIntegersFromUrls(urls) {
  try {
    const responses = await Promise.all(urls.map(url => axios.get(url)));
    const mergedIntegers = [];

    responses.forEach(response => {
      const integers = response.data
        .split(',')
        .map(number => parseInt(number.trim()));
      mergedIntegers.push(...integers);
    });

    return mergedIntegers;
  } catch (error) {
    console.error('Error fetching or merging integers:', error.message);
    return [];
  }
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});*/



import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { numbers: [] });
});

app.post("/", async (req, res) => {
  const userInput = req.body.urls;
  let mergedIntegers = [];

  if (userInput.startsWith("http")) {
    const urls = userInput.split(',').map(url => url.trim());
    mergedIntegers = await fetchAndSortIntegersFromUrls(urls);
  } else {
    const numbers = userInput.split(',').map(number => parseInt(number.trim()));
    mergedIntegers = numbers;
  }

  res.render("index.ejs", { numbers: mergedIntegers });
});

async function fetchAndSortIntegersFromUrls(urls) {
  try {
    const responses = await Promise.all(urls.map(url => axios.get(url)));
    const mergedIntegers = [];

    responses.forEach(response => {
      const integers = response.data
        .split(',')
        .map(number => parseInt(number.trim()));
      mergedIntegers.push(...integers);
    });

    return mergedIntegers.sort((a, b) => a - b); // Sort in ascending order
  } catch (error) {
    console.error('Error fetching or merging integers:', error.message);
    return [];
  }
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});









