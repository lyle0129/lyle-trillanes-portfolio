fetch("https://send.api.mailtrap.io/api/send", {
  method: "POST",
  headers: {
    "Authorization": "Bearer dda0195a7e9e8bb546bed1d2148e3480",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    from: {email: "no-reply@lyle-trillanes.xyz", name: "Test"},
    to: [{email: "lyledenzell29@gmail.com"}],
    subject: "Test",
    text: "Test"
  })
}).then(r => r.json().then(j => console.log(r.status, j))).catch(e => console.error(e));
