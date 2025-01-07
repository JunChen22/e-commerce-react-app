type ErrorMessageProps = {
    message: string;
    onRetry: () => void;
  };
  
  export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
    return (
      <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
        <p className="text-red-600">Error: {message}</p>
        <button 
          onClick={onRetry}
          className="mt-2 text-red-600 underline"
        >
          Try again
        </button>
      </div>
    );
  }