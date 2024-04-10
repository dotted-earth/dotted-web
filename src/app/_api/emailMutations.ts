import { supabase } from "../_services/supabase";

type PostEmailSignupProps = {
  email: string;
};

export const postEmailSignup = async ({ email }: PostEmailSignupProps) => {
  const response = await supabase
    .from("email_sign_ups")
    .insert({ email: email });
  return response;
};
