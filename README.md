This is an example of the react query persister not working with yarn berry.

To reproduce:

```
yarn
yarn dev
```

Open `localhost:3000` and you should see the error message `Error: No QueryClient set, use QueryClientProvider to set one`.
