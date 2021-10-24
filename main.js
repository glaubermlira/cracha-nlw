const linksSociaMedia = {
  github: 'glaubermlira',
  youtube: 'channel/UCBJDOA8X8buFl7txsFz-UcQ',
  instagram: 'glaubermlira',
  facebook: 'glaubermlira',
  twitter: 'glaubermlira'
}

// github.href = `https://www.github.com/${linksSociaMedia.github}`

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSociaMedia[social]}`
    // console.log(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getInfosGithubProfile() {
  const url = `https://api.github.com/users/${linksSociaMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getInfosGithubProfile()
