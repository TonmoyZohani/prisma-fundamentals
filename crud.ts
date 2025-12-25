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
      // posts: true,
      // profile: true,
    },
  });

  // const profiles = await prisma.profile.findMany({
  //   // include: {
  //   //   posts: true,
  //   //   profile: true,
  //   // },
  //   select: {
  //     id: true,
  //     bio: true,
  //     dateOfBirth: true,
  //   },
  // });

    console.log("Users", users);
  // console.log("Profile", profiles);

  // const updatedUser = await prisma.profile.update({
  //   where: {
  //     userId: 1,
  //   },
  //   data: {
  //     bio: "This is my updated bio",
  //     dateOfBirth: new Date("1990-01-01"),
  //   },
  //   select: {
  //     id: true,
  //     bio: true,
  //     user: true,
  //   },
  // });

  // console.log("Updated User", updatedUser);

  // const profiles = await prisma.profile.findMany({
  //   select: {
  //     id: true,
  //     bio: true,
  //     dateOfBirth: true,
  //     user: true,
  //   },
  // });

  // console.log("Profiles", profiles);

  // const deleteUser = await prisma.user.delete({
  //   where: {
  //     id: 3,
  //   },
  // });

  // console.log("Delete User", deleteUser);

  // const getUserDataById = await prisma.user.findUnique({
  //   where: { id: 3 },
  //   include: {
  //     posts: true,
  //     profile: true,
  //   },
  // });

  // console.log("Single User", getUserDataById);

  // const upsertUser = await prisma.user.upsert({
  //   where: {
  //     email: "tonmoyz@gmail.com",
  //   },
  //   update: {
  //     name: "Khaled Zohani Tonmoy",
  //   },
  //   create: {
  //     name: "Tonmoy Zohan",
  //     email: "tonmoyz@gmail.com",
  //   },
  // });

  // console.log("Upsert User", upsertUser);
}

run();
