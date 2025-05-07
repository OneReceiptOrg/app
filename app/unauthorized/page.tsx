import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

interface UnauthorizedPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function UnauthorizedPage(props: UnauthorizedPageProps) {
  const searchParams = await props.searchParams;

  const inviteLink = searchParams?.invite as string | undefined;
  const errorCode = searchParams?.error as string | undefined;

  let title = "Access Denied";
  let description =
    "You do not have the necessary permissions to access this application.";
  let details =
    "Access requires a specific role in our Discord server. Complete the verification process, including any required subscription, to obtain this role.";

  if (errorCode === "unauthorized_no_invite") {
    details =
      "Please ensure you are a member of the required Discord server. Contact an administrator if you believe this is an error, as no specific invite link was provided.";
  } else if (errorCode === "unauthorized_check_failed") {
    title = "Authorization Check Failed";
    description = "We couldn't verify your permissions.";
    details =
      "There was an issue checking your status in the required Discord server. Please try again later or contact an administrator.";
  } else if (errorCode === "config_error") {
    title = "Configuration Error";
    description = "There seems to be an issue with the application's setup.";
    details =
      "Please contact an administrator to resolve the configuration problem.";
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background p-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <Alert variant="destructive" className="text-left">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle className="font-bold text-lg">{title}</AlertTitle>
          <AlertDescription className="mt-1">{description}</AlertDescription>
        </Alert>

        <p className="text-muted-foreground">{details}</p>

        {inviteLink && (
          <Button asChild className="w-full">
            <Link href={inviteLink} target="_blank" rel="noopener noreferrer">
              Join the Discord Server
            </Link>
          </Button>
        )}

        <Button variant="outline" asChild className="w-full">
          <Link href="/api/auth/login">Try Logging In Again</Link>
        </Button>
      </div>
    </div>
  );
}
