const useToast = (toast) => {
  const showToast = (severity, summary, details) => {
    toast.current.show({ severity, summary, detail: details });
  };

  return [showToast];
};

export default useToast;
