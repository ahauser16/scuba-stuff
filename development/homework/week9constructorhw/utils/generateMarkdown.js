function generateProjectUrl(github, title)  {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
      return `[![GitHub license](https://img.shields.io/badge/license-${license}-b)]`
  }
  return ''
  
}

function renderLicenseSection(license)  {
  if (license !== "None") {
      return (
          `## License
          
This Project is licensed under the ${license} license.`
      )
  }
  return ''
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license, data.github, data.title)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contrib uting](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ##Installation

  To install necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  <img src="${data.avatar_url}" alt="avatar" style="border-radius: 16px" width = "30px">

  If you have any questions about the repo, open an issue or contact [$data.github.com]

  `;
}

module.exports = generateMarkdown;