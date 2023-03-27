export default function formatMoneyValue(input: number) {
    return input?.toLocaleString(undefined, {
      minimumFractionDigits: 2
    });
  }
  