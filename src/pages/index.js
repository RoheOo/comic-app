import Head from "next/head";
import { Container, Card, Row, Text } from "@nextui-org/react";
import { Header } from "@/components/Header";
import fs from "fs/promises";

export default function Home({ comics }) {
  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
          {/* <Container>
            <Card css={{ $$cardColor: "$colors$primary" }}>
              <Card.Body>
                <Row justify="center" align="center">
                  <Text h6 size={15} color="white" css={{ m: 0 }}>
                    NextUI gives you the best developer experience with all the
                    features you need for building beautiful and modern websites
                    and applications.
                  </Text>
                </Row>
              </Card.Body>
            </Card>
          </Container> */}
        </main>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const files = await fs.readFile("./comics");

  return {
    props: {
      comics: [],
    },
  };
}
