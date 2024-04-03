import { signIn } from "@/auth";
import { DEFAULT_LOGIN_RDIRECT } from "../../../routes";
import { AuthError } from "next-auth";

export const signin = async (values: any) => {
  const { email, password } = values;

  // try {
  //   await signIn("credentials", {
  //     email: email,
  //     password: password,
  //     redirectTo: DEFAULT_LOGIN_RDIRECT,
  //   });
  // } catch (error) {
  //   if (error instanceof AuthError) {
  //     switch (error.type) {
  //       case "CredentialsSignin":
  //         return { error: "Invalid credentials" };

  //       default:
  //         return { error: "Something went wrong" };
  //     }
  //   }
  //   throw error;
  // }
};
