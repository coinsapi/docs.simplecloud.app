import { redirect } from "react-router";

export function loader() {
  return redirect("/docs/manual/overview");
}
