export type Error = {
  message: string | never | null;
};
export default function Error({ message }: Error) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
        <h1 className="text-2xl mb-4">Error</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}
