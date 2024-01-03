import { Spinner } from "@material-tailwind/react";

export function CustomSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-2 border-b-2 border-gray-900/50 h-16 w-16"></div>
      <h2 className="text-gray-600 ml-2">Loading...</h2>
    </div>
  );
}
