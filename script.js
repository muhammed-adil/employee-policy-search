console.log("JS file loaded");

const serviceName = "tcs-search-service";
const indexName = "azureblob-index";
const apiKey = "Ae3zq1sjsML9D2UtpHtWuc308dyCWXmy1UngFxYUvHAzSeDnlgT9";

async function search() {
  console.log("Search button clicked");

  const text = document.getElementById("searchText").value;
  console.log("Search text:", text);

  const url = `https://${serviceName}.search.windows.net/indexes/${indexName}/docs/search?api-version=2023-11-01`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey
    },
    body: JSON.stringify({
      search: text
    })
  });

  const data = await response.json();
  console.log("Azure response:", data);

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

data.value.forEach(item => {
  const policy = item.content[0];

  const div = document.createElement("div");
  div.style.border = "1px solid #ccc";
  div.style.padding = "10px";
  div.style.marginBottom = "10px";

  div.innerHTML = `
    <h3>${policy.title}</h3>
    <p>${policy.content}</p>
    <strong>Category:</strong> ${policy.category}
  `;

  resultsDiv.appendChild(div);
});

}
