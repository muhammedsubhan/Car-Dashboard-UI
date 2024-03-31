"use server";
import bcrypt from "bcrypt";
import { db } from "../libs/db";
import { getUserByEmail } from "../data/user";

export const login = async (values: any) => {
  const { firstname, lastname, email, password } = values;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use" };
  }

  await db.user.create({
    data: {
      firstname,
      lastname,
      email,
      password: hashedPassword,
    },
  });

  return { success: "Email sent" };
};
