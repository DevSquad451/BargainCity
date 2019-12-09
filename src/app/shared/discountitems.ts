import { DiscountModel } from './discount-model';

export const DiscountItems: DiscountModel[] = [
  {
    id: '6',
    // tslint:disable-next-line: max-line-length
    imgSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRxbL11uYvfmpUSsOWEWjFeOHfETtlKp7Ggn46_pRAC0KPLsZLK0B5yIo7Pi_bQ2MkDVyq8rESfwPAEy-vSeq79G39AqIyVrDTT6vfuLOs&usqp=CAE',
    Name: 'Michelin Tire',
    Original: '$104.00',
    Discount: '$84.00',
    Quantity: '1',
    Rating: '3.2/5',
  },
  {
    id: '7',
    // tslint:disable-next-line: max-line-length
    imgSrc: 'data:image/png;base64,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',
    Name: 'Listerine 1L',
    Original: '$8.45',
    Discount: '$5.00',
    Quantity: '1',
    Rating: '4.1/5',
  },
  {
    id: '8',
    // tslint:disable-next-line: max-line-length
    imgSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQwl7DYM9_i58W-G42Bfhspd0Rw0COfbePBP9j1PCNNyetqqgb3Z3a5lZRDuyqboyl8CjBcxwLdA&usqp=CAc',
    Name: 'Jack Links Beef Jerky 16oz',
    Original: '$16.99',
    Discount: '$14.50',
    Quantity: '1',
    Rating: '3.7/5',
  },
  {
    id: '9',
    // tslint:disable-next-line: max-line-length
    imgSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSVLiaMS2qK5EH3XewMEibGuMvIymSx-c_mOpcumQjw1L2ha0Mzm77m0EtRCp6UQ1NfLuxIt8URxA&usqp=CAc',
    Name: 'Dirt Devil Vacuum Cleaner',
    Original: '$59.99',
    Discount: '$49.99',
    Quantity: '1',
    Rating: '4.5/5',
  },
  {
    id: '10',
    // tslint:disable-next-line: max-line-length
    imgSrc: 'data:image/webp;base64,UklGRsoEAABXRUJQVlA4IL4EAABQHgCdASpUAJwAPj0Oj0eiERELMCADxLSAaXbirjzuZf/N/4f2q/Cj6j9GDq7CxaOOMvnuAUTcJm2wfZsm6zNhZEW1+x7dt44V44YoEi7jrktSkyDMWuNPDBcE7PstTaEsM8FFJvaS/e/YZJp5X+jM2sKyvVcpvNoj2JHxJT7BMQO25RVsIiAmMGRF0J/HSEjsQFqqaka6p1jGFzIcrPCMJjj6BgUqMHHe2ZfdJrjovNFc9or98sT/TEybN0Gqk18SJAASGKck8ICy8VZVEut3EHs7MPlbQw8OBggZCetnmrDqlOEY1k5Iyrg5EaDWVhfFg6gO2ZAwvBEoAAD+/3aGOz/90egnw6+7T/s7+Q/yHw3lWSMZjGohvQwv/PqSvT26bBAl76kI8J0PigG5WMxe69Pa/jbEvqX/g/4L+nEtJ9Cqfe24mcgW7eCUi2/DCXT6mM5rXlAx/UhEeFBg1c5gxkCvxF//XQYH3eIf/mM8lFfxSt+v//0Not9vFmUUR87yT4UqUYMFMFTlGq7ZM8lnwBT2mG1DNYn6RlAtMsv1zv9PfpP9oleWU+megYBx8Xj/+ffO0z9zSKEI9RLo0i6OqWuBYY8MVXvuYAcR8uWKqOqfnx0ZRzWbf5aNALGjj+9fq3CVY7txLxGUoVkfdqkd13Z2QKPobRpXmRhc2rzRS4U0Qj0tNdgp4AHICQ2W/5feWotJISxR3fXjQrawFYHLXDQn9IML6zx7R605SKqopmMU4/fygFn+WGh5l3/nhP0aCMe9Yhuqhru7+qw+acp0s+VgNiUBSl1C41ahnE/aP6VUNeC2Zh80y4q1f/0ZDlwEfjQ9maQO2O6a7g00alV7QY9Yg7fAm6ORz5xw9ORyBMu3PRSRWXoNa7JYHOk4hwXpeAcEfpbPJvattUzjtgzrb+FXU7WbH6g2TywrXYRrYBFbQOON5F94Ff/KSEGU0owc4FR15aj9/dAtTp0BRkEMZ0MosZF67g7OJiVaNi/BMMWuASGixFwOE/RRRSYIlCEZK6AarZnQiGl3x6FWnxGMGBVDxJJ5PmHNqzH1Nf8Q+wMu/V9gPYDT2ko+J036NodH5erMBv5BeaH3qoik1dLYQ05sorHsn1eBZeSgdM3fs0JmtPtuJOFXdKv/wJkUJ2VDjJImr37rr4HUstj1bl/xgveVPNWWpp7AqGr09q/xpYF6PgVKg6oCi6IeVug+jAiQPVhw8AQRHVrHbuieRwpC77+h5l6bz/WnoCN2GHK+8sN+ujdvnuwptFj9YaseRYI3OnEcmlvPEiHXjT6D9Nap7mJJ7DtkoNTLhwDoybx36pfRAusVbNEZCxUa1mTEpEvKAWMd7RRyAWVtvt3IJvzd+7g0HEGeC5lKjFwZAJCeEFXBZjXhO+zQtyoCAuKMb96oCjcDyN3h1RWrE1UEO3BKhPzuZGyfsTBYDGMUUtG8XmPDrqy4B8MFvZtcBnw8TwB5SgYb4QAysIxiXAkUtiGnjZlicTRdWqD5bO0yKVw2CirGVKrr7eGlOEQbbUV6G5wju8m4UA+P15cVgqigvU4iWoJQUt+5espSZP2Xdw5R073GV+m+00qS5LRT/NMmyQJFhF1EpnhPBogHPjUAAA==',
    Name: 'Apple AirPods',
    Original: '$149.99',
    Discount: '$129.99',
    Quantity: '1',
    Rating: '4.4/5',
  },
];
