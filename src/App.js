import React from "react";
import { Container, Nav } from "react-bootstrap";
import { useContractKit } from "@celo-tools/use-contractkit";
import { Notification } from "./components/ui/Notifications";
import Wallet from "./components/Wallet";
import Cover from "./components/minter/Cover";
import Nfts from "./components/minter/nfts";
import { useBalance, useMinterContract } from "./hooks";
import coverImg from "./assets/img/heritagelogo.jpg";
import "./App.css";

const App = function AppWrapper() {
  const { address, destroy, connect } = useContractKit();
  const { balance, getBalance } = useBalance();
  const minterContract = useMinterContract();

  return (
    <>
      <Notification />
      {address ? (
        <Container fluid="md">
          <Nav className="navbar navbar-light justify-content-between pt-3 pb-5">
            <Nav.Item className="flex-start" >
              <img
                height={40}
                width={150}
                alt="logo"
                src={coverImg}
              />
            </Nav.Item>
            <Nav.Item className="flex-end">
              <Wallet
                address={address}
                amount={balance.CELO}
                symbol="CELO"
                destroy={destroy}
              />
            </Nav.Item>
          </Nav>
          <main>
            <Nfts
              name="HERIT.age NFT Collection"
              updateBalance={getBalance}
              minterContract={minterContract}
            />
          </main>
        </Container>
      ) : (
        <Cover name="-" coverImg={coverImg} connect={connect} />
      )}
    </>
  );
};

export default App;

