import { SignUp } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="flex justify-center p-10">
      <SignUp signInUrl={process.env.CLERK_SIGN_IN_URL} />
    </div>
  );
}
