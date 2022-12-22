const PriceQuoteLabel = (): JSX.Element => {
  return (
    <>
      <p className="text-lg">Estimated Price:</p>
      <p className="text-3xl font-bold">$350.00</p>
      <p className="text-sm max-w-lg py-4">
        **Price is not final. This is only a rough estimate. We will contact you
        for a final quote.
      </p>
    </>
  );
};

export default PriceQuoteLabel;
