import { Button, Result } from "antd";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Result
        status="success"
        title="Successfully setup NextJS with Ant Design and Less!"
        subTitle="Theme setup in ./styles/antd-theme.less"
        extra={[
          <a
            key="antd"
            href="https://ant.design/components/overview/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Button type="primary">Ant Design docs</Button>
          </a>,
          <a
            key="antd"
            href="https://nextjs.org/docs/getting-started"
            target={"_blank"}
            rel="noreferrer"
          >
            <Button type="dashed">NextJS docs</Button>
          </a>,
        ]}
      />
    </div>
  );
};

export default Home;
