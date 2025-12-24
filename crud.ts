import { prisma } from "./lib/prisma";

async function run() {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       name: "Rahim",
  //       email: "rahim@gmail.com",
  //       role: "User",
  //     },
  //   });

  //   const createPost = await prisma.post.create({
  //     data: {
  //       title: "This is a post",
  //       content: "This is the content of the post",
  //       isPublished: true,
  //       authorId: 1,
  //     },
  //   });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is my bio",
  //     dateOfBirth: new Date("1990-01-01"),
  //     userId: 1,
  //   },
  // });

  //   console.log("Create User:", createUser);

  //   console.log("Create Post:", createPost);
  // console.log("Create Profile:", createProfile);

  const users = await prisma.user.findMany({
    // include: {
    //   posts: true,
    //   profile: true,
    // },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      posts: true,
      profile: true,
    },
  });

  //   console.log("Users", users);
  console.dir(users, { depth: Infinity });
}

run();
