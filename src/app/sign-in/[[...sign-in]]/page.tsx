import { SignIn } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="flex justify-center h-screen items-center py-20 px-10">
      <SignIn
        signUpUrl={process.env.CLERK_SIGN_UP_URL}
        forceRedirectUrl={process.env.CLERK_SIGN_IN_FORCE_REDIRECT_URL}
      />
    </div>
  );
}
