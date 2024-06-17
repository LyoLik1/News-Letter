import { FC } from "react";
import {
  Html,
  Button,
  Container,
  Text,
  Font,
  Head,
  Img,
  Row,
  Heading,
  Section,
  Column,
  Body,
  Hr,
} from "@react-email/components";
import { Inst } from "../assets/svg/Inst";
import { XImg } from "../assets/svg/X";
import { LinkedIn } from "../assets/svg/Linkedin";
import datas from "./data.json";
import { useDevice } from "../hooks/useDevice";

const links = [
  {
    img: <LinkedIn width="32px" height="30px" color="white" />,
    link: "https://www.linkedin.com/feed/",
  },
  {
    img: <Inst width="32px" height="30px" color="white" />,
    link: "https://www.instagram.com/",
  },
  {
    img: <XImg width="32px" height="30px" color="white" />,
    link: "https://twitter.com/home",
  },
];

export const Email: FC = () => {
  const { isDesktop, isMobile, isLargeDesktop } = useDevice();
  const data = datas;

  const truncateText = (text: string, length: number) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  const getImageSrc = (source: string) => {
    switch (source) {
      case "inst":
        return <Inst />;
      case "x":
        return <XImg />;
      default:
        return "";
    }
  };

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Font
          fontFamily="Montserrat"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/montserrat/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight="400"
          fontStyle="normal"
        />
      </Head>
      <Body>
        <Section>
          <Container
            style={{
              backgroundColor: "rgb(31,31,31)",
              height: "70px",
              width: "100%",
              maxWidth: "100%",
              color: "#fff",
              fontFamily: "Montserrat",
              fontWeight: "400",
            }}
          >
            <Text style={{ textAlign: "center" }}>
              Dear User! Your subscription expires in 30 days.{" "}
              <a style={{ color: "rgb(18, 109, 43)" }} href="/app/subscribe">
                Keep me receive daily gems
              </a>
            </Text>
          </Container>
          <Row
            style={{
              fontFamily: "Montserrat",
            }}
          >
            <Heading
              as="h1"
              style={{
                textAlign: "center",
                letterSpacing: "8px",
                fontSize: "25px",
                fontWeight: "400",
                textTransform: "uppercase",
                margin: "30px 0",
              }}
            >
              News + letter
            </Heading>
          </Row>
        </Section>
        <Hr
          style={{
            border: "1px solid black",
          }}
        />
        <Section
          style={{
            marginBottom: "50px",
            textAlign: "center",
            margin: "50px auto",
            width: isLargeDesktop ? "70%" : isDesktop ? "85%" : "80%",
          }}
        >
          <Row
            style={{
              textAlign: "center",
              margin: "0 auto",
              width: "100%",
              maxWidth: "100%",
            }}
          >
            {data
              .sort((a, _) => (a.img ? -1 : 1))
              .map((post) => (
                <Row
                  style={{
                    verticalAlign: "middle",
                    display: "inline-block",
                    textAlign: "center",
                    height: "fit-content",
                    width: isMobile ? "100%" : "fit-content",
                    margin:
                      isDesktop || isLargeDesktop
                        ? "0 50px 50px 50px"
                        : isMobile
                        ? "auto"
                        : "30px",
                    padding: isLargeDesktop ? " 0 0 0 5%" : "0",
                  }}
                  key={post.title}
                >
                  <Column
                    style={{
                      backgroundColor: "rgba(18, 109, 43, 0.1)",
                      width: "330px",
                      maxHeight: "420px",
                      borderRadius: "10px",
                      marginTop: "30px",
                      display: "inline-block",
                      textAlign: "center",
                      margin: "10px auto",
                    }}
                  >
                    {post.img ? (
                      <Img
                        src={post.img}
                        width="100%"
                        height="260px"
                        style={{
                          display: "inline-block",
                          objectFit: "cover",
                          verticalAlign: "top",
                          borderRadius: "10px 10px 0 0",
                        }}
                      />
                    ) : null}
                    <Container
                      style={{
                        display: "inline-block",
                        marginTop: "10px",
                        verticalAlign: "top",
                        marginBottom: "10px",
                        width: "330px",
                      }}
                    >
                      <Container
                        style={{
                          display: "inline-block",
                          width: "24px",
                          verticalAlign: "middle",
                          marginLeft: "10px",
                        }}
                      >
                        {getImageSrc(post.source)}
                      </Container>

                      <Text
                        style={{
                          display: "inline-block",
                          marginTop: "0px",
                          marginLeft: "10px",
                          marginBottom: "0px",
                          verticalAlign: "middle",
                          height: "100%",
                          color: "#126D2B",
                        }}
                      >
                        {post.title}
                      </Text>
                    </Container>
                    <Row style={{ textAlign: "center", width: "100%" }}>
                      <Text
                        style={{
                          lineHeight: "25px",
                          width: "95%",
                          textWrap: "balance",
                          textAlign: "center",
                          margin: post.img
                            ? "0 auto 12px auto"
                            : "0 auto 24px auto",
                          fontSize: "16px",
                        }}
                      >
                        {truncateText(post.text, post.img ? 60 : 160)}
                      </Text>
                    </Row>
                    <Button
                      href={post.link}
                      style={{
                        width: "100%",
                        height: "50px",
                        backgroundColor: "rgba(0,0,0,0.1)",
                        borderRadius: "0 0 10px 10px",
                        textAlign: "center",
                        verticalAlign: "middle",
                        padding: "auto",
                        color: "#000",
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          margin: "0",
                          marginTop: "12px",
                          textTransform: "uppercase",
                          letterSpacing: "2.25px",
                        }}
                      >
                        Read
                      </Text>
                    </Button>
                  </Column>
                </Row>
              ))}
          </Row>
        </Section>
        <Section>
          <Container
            style={{
              backgroundColor: "#000",
              padding: "30px 0",
              width: "100%",
              maxWidth: "100%",
              color: "#fff",
              fontFamily: "Montserrat",
              fontWeight: "400",
              borderTopRightRadius: "50px",
            }}
          >
            <Row style={{ height: "100%" }}>
              <Column
                style={{
                  width: "100%",
                  textAlign: "center",
                  verticalAlign: "top",
                  height: "100%",
                  maxWidth: "100%",
                }}
              >
                <Row
                  style={{
                    verticalAlign: "top",
                    width: "100%",
                    maxWidth: "100%",
                    textAlign: "center",
                  }}
                >
                  {links.map((link) => (
                    <Button
                      href={link.link}
                      key={link.link}
                      style={{
                        width: "32px",
                        height: "32px",
                        margin: "0 15px",
                      }}
                    >
                      {link.img}
                    </Button>
                  ))}
                </Row>
                <Row
                  style={{
                    width: "50%",
                    textAlign: "center",
                    margin: "0 auto",
                  }}
                >
                  <Text
                    style={{ fontSize: "13px", lineHeight: "21.5px" }}
                  ></Text>
                </Row>
                <Row
                  style={{
                    width: "50%",
                    textAlign: "center",
                    margin: "0 auto",
                  }}
                >
                  <Text style={{ fontSize: "13px", lineHeight: "21.5px" }}>
                    You received this email because you signed up for News +
                    Letter or because it is included in your subscription. Want
                    Unsubscribe? Contact hello@happymvp.com
                  </Text>
                </Row>
                <Row
                  style={{
                    width: "50%",
                    textAlign: "center",
                    margin: "0 auto",
                  }}
                >
                  <Text style={{ fontSize: "13px", lineHeight: "21.5px" }}>
                    ©2024 News + Letter | All Rights Reserved
                  </Text>
                </Row>
              </Column>
            </Row>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};
