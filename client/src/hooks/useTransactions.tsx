import { useEffect, useState } from "react";
import { ITransaction } from "../model/ITransaction";

const getTransactions = async () => {
  const results = await fetch("http://18.220.110.23:8000/api/transactions/");

  const parseResponse = await results.json();

  if (parseResponse.status === "success") {
    return parseResponse.data;
  }
  return [];
};

export const useTransactions = (): [ITransaction[], boolean] => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTransactions().then((_) => {
      setTransactions(_);
      setLoading(false);
    });
  }, []);

  return [transactions, loading];
};
