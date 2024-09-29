import { redirect, RedirectType } from "next/navigation";

function ResearchPage() {
  redirect("/research", RedirectType.push);
}

export default ResearchPage;
