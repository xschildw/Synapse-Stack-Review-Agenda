function fetchReposAndInjectRows(pathToJson, tbodyId) {
  $.getJSON(pathToJson).done(function (data) {
    const innerHTML = data
      .map(function (repo) {
        return `
            <tr>
                <td style="text-align: left;">
                    <a target="_blank" rel=\"noopener noreferrer\" href='https://github.com/${repo}/security/dependabot'>${repo.replace("Sage-Bionetworks/", "")}</a>
                </td>
                <td style="text-align: center;">
                    <input type="checkbox" />
                </td>
            </tr>`;
      })
      .join("");
    $(tbodyId).html(innerHTML);
  });
}
