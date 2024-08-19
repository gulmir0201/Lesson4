const getUser = function () {
    fetch("https://randomuser.me/api")
        .then((result) => result.json())
        .then((data) => {
            const {
                picture: { medium },
                name: { title, first, last },
                email,
                cell,
                location: {
                    timezone: { description },
                },
            } = data.results[0];

            const userTemplate = `
                <div class="user-card">
                    <img src="${medium}" alt="profile-picture" class="profile-pic">
                    <h2 class="user-name">${title} ${first} ${last}</h2>
                    <p class="user-bio">${description}</p>
                    <div class="contact-info">
                        <p>Email: ${email}</p>
                        <p>Phone: ${cell}</p>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML("beforeend", userTemplate);
        })
        .catch((error) => console.error(error));
};

getUser();

const createMultipleUsers = function (numUsers) {
    for (let i = 0; i < numUsers; i++) {
        getUser();
    }
};

createMultipleUsers(5);