const listRepos = async (username) => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    })
    .then();
  const markups = repos
    .map(
      (repo) => `
        <li>
            <a href="${repo.html_url}">${repo.name}</a>
            (⭐️ ${repo.stargazers_count})
        </li>
    `
    )
    .join("");
  const content = document.querySelector("#content");
  content.innerHTML = `<ul>${markups}</ul>`;
};

listRepos("peterchu999");
