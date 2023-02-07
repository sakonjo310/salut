async function Handler(req, res) {
const { email, name, hashedPassword } = req.body;
const newUser = await prisma.user.create({
  data: {
      email: email,
      name: name,
      password: hashedPassword
  }
});
}