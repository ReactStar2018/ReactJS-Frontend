import React from 'react';
import ReactDOM from 'react-dom';
import './faq.css'
import Images from './images'

class FAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false,

            organization: false,
            jibrel: false,
            qubist: false,
            help: false,
            jibrel_platform: false,
            poca_wallet: false,

            crypto_depository: false,
            CryDRs: false,
            c_CryDRs: false,

            Contracts: false,
            on_chain: false,
            currency_agnosticism: false
        };
    };

    handleResize(){
        this.setState({
            windowWidth: window.innerWidth,
        });
    }

    componentWillMount(){
        this.handleResize();
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize=()=>{this.setState({windowWidth: window.innerWidth})});
        window.addEventListener('resize', this.handleResize=()=>{
          if(window.innerWidth <= 1000 && this.state.mobileNavVisible){
            this.setState({mobileNavVisible: true})
          }else{
            this.setState({mobileNavVisible: false})
          }
        });
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize=()=>{this.setState({windowWidth: window.innerWidth})});
        window.removeEventListener('resize', this.handleResize=()=>{
          if(window.innerWidth <= 1000 && this.state.mobileNavVisible){
            this.setState({mobileNavVisible: true})
          }else{
            this.setState({mobileNavVisible: false})
          }
        });
    }

    render() {
        return <div className="normal">
            <div className="faq_normal"  style={{width: this.state.windowWidth <= 1200 ? window.innerWidth*9/10 : 1100}}>
              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 30 : 42}}>FREQUENTLY ASKED QUESTIONS (FAQ)</h1>
              <p style={{fontSize: this.state.windowWidth <= 1000 ? 16 : null}}>Commonly asked questions about the jibrel network and their respective answers</p>
              <p style={{display: 'inline-block', fontSize: this.state.windowWidth <= 1000 ? 16 : 18}}>Did we miss something?<br/>Email us at <a href="mailto:questions@jibrel.network"><p style={{display: 'inline-block', fontSize: this.state.windowWidth <= 1000 ? 16 : 18, color: '#4d98ff', cursor: 'pointer'}}>questions@jibrel.network</p></a></p>

              <div className="box_div" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : null}} onClick={e=>this.setState({organization: !this.state.organization})}>
                OVERVIEW
                <img src={this.state.organization ? Images.close : Images.add} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}}/>
              </div>
              {
                this.state.organization ? (
                  <div>
                    <div className="box_div_gray" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : null}} onClick={e=>this.setState({jibrel: !this.state.jibrel})}>
                      What is Jibrel?
                      <img src={this.state.jibrel ? Images.close_gray : Images.add_gray} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}}/>
                    </div>
                    {
                      this.state.jibrel ? (
                        <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : 22}}>
                        The Jibrel Network aims to allow anyone to tokenize traditional real-world assets.<br/><br/>Investors can tokenize cash and money market instruments and sell them on-chain, benefiting from on-chain / off-chain arbitrage.<br/><br/>Jibrel facilitates institutional grade liquidity to flow into the crypto economy in the form of cash and money market backed tokens, allowing decentralized autonomous organizations and funds to diversify their crypto-holdings into more stable assets.<br/><br/>The Jibrel Network is a Jibrel Foundation initiative.<br/>The Jibrel Foundation is based in Zug, Switzerland.
                        </div>
                      ) : null
                    }

                    <div className="box_div_gray" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : null}} onClick={e=>this.setState({qubist: !this.state.qubist})}>
                      Who is Qubist Labs?
                      <img src={this.state.qubist ? Images.close_gray : Images.add_gray} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}}/>
                    </div>
                    {
                      this.state.qubist ? (
                        <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : 22}}>
                          Qubist labs is an independent entity engaged by the Jibrel Foundation to develop the Jibrel Network.
                        </div>
                      ) : null
                    }

                    <div className="box_div_gray" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : null, marginBottom: 10}} onClick={e=>this.setState({help: !this.state.help})}>
                      Why are you building the Jibrel Network?
                      <img src={this.state.help ? Images.close_gray : Images.add_gray} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}}/>
                    </div>
                    {
                      this.state.help ? (
                        <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : 22}}>
                        The disconnect between the traditional economy and the cryptoeconomy imposes numerous risks. Liquidity risks arising from the bottlenecks faced by exchanges in converting between digital and traditional assets. Fraud risks arising from a lack of oversight and governance, and systemic risks arising from project funding stored in cryptocurrencies locked in smart contracts. With volatile markets heavily influenced by speculation and consumer behavior, it is imperative that on-chain entities have stable assets to store funds.<br/><br/>By bridging the traditional economy and the emerging cryptoeconomy, Jibrel provides more value and lower risk.
                        </div>
                      ) : null
                    }

                    <div className="box_div_gray" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : null, marginBottom: 10}} onClick={e=>this.setState({jibrel_platform: !this.state.jibrel_platform})}>
                      What is the Jibrel Platform?
                      <img src={this.state.jibrel_platform ? Images.close_gray : Images.add_gray} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}}/>
                    </div>
                    {
                      this.state.jibrel_platform ? (
                        <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : 22}}>
                        The Jibrel platform is a on-chain / off-chain platform that allows users to tokenize traditional assets. Investors can use the platform to configure their assets, with regards to AML / KYC and compliance restrictions, and sell them on-chain for a profit.<br/><br/>Decentralized organizations and funds can used asset-backed tokens to hedge into more stable traditional financial instruments.
                        </div>
                      ) : null
                    }

                    <div className="box_div_gray" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : null, marginBottom: 10}} onClick={e=>this.setState({poca_wallet: !this.state.poca_wallet})}>
                      What is the Poca Wallet?
                      <img src={this.state.poca_wallet ? Images.close_gray : Images.add_gray} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}}/>
                    </div>
                    {
                      this.state.poca_wallet ? (
                        <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : 22}}>
                        The Poca (Proof of Capital) Wallet is a universal, ‘currency-agnostic’ wallet. Users can deposit money in any currency and use the wallet to pay, send or receive money in any currency, anywhere.<br/><br/>The Poca Wallet relies on the Jibrel Network’s back-end to facilitate seamless currency conversion and zero-fee remittances.
                        </div>
                      ) : null
                    }

                  </div>
                ) : null
              }

              <div className="box_div" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : null}} onClick={e=>this.setState({tokens: !this.state.tokens})}>
                CRYPTO-DEPOSITORY RECEIPTS (CryDRs)
                <img src={this.state.tokens ? Images.close : Images.add} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}}/>
              </div>
              {
                this.state.tokens ? (
                  <div>
                    <div className="box_div_gray" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : null}} onClick={e=>this.setState({crypto_depository: !this.state.crypto_depository})}>
                      What are Crypto Depository Receipts (CryDRs)?
                      <img src={this.state.crypto_depository ? Images.close_gray : Images.add_gray} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}}/>
                    </div>
                    {
                      this.state.crypto_depository ? (
                        <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : 22}}>
                        Crypto Depository Receipts are smart contracts that represent ownership of a real-world asset held by Jibrel on behalf of users.<br/><br/>Users can deposit any real-world asset in the Jibrel Decentral Bank and receive a CryDR representing ownership of that asset.<br/><br/>The CryDR can be transferred or sold to another individual or entity, who can redeem the token for the underlying asset with the Jibrel Decentral Bank.<br/><br/>CryDRs have regulation embedded within them, meaning they can only be purchased, transferred or sold by those with the legal authority to do so.<br/><br/>Jibrel currently supports 8 different CryDRs, 6 fiat currencies and 2 money market instruments.
                        </div>
                      ) : null
                    }

                    <div className="box_div_gray" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : null}} onClick={e=>this.setState({CryDRs: !this.state.CryDRs})}>
                      What can CryDRs be used for?
                      <img src={this.state.CryDRs ? Images.close_gray : Images.add_gray} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}}/>
                    </div>
                    {
                      this.state.CryDRs ? (
                        <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : 22}}>
                        CryDRs can represent ownership of any real-world asset.<br/><br/>Initially CryDRs will be used to facilitate the free movement of financial assets.<br/><br/>This includes fiat currencies through remittance solutions, and money market instruments through investment platforms.
                        </div>
                      ) : null
                    }

                    <div className="box_div_gray" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : null, marginBottom: 10}} onClick={e=>this.setState({c_CryDRs: !this.state.c_CryDRs})}>
                      What CryDRs are currently available?
                      <img src={this.state.c_CryDRs ? Images.close_gray : Images.add_gray} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}}/>
                    </div>
                    {
                      this.state.c_CryDRs ? (
                        <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : 22}}>
                        Jibrel currently supports six fiat currencies - USD, EUR, GBP, RUB, CNY, AED and two money market instruments (US Treasury Bills, Certificates of Deposits)
                        </div>
                      ) : null
                    }

                  </div>
                ) : null
              }

              <div className="box_div" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : null, marginBottom: !this.state.fundraising ? 30 : null}} onClick={e=>this.setState({fundraising: !this.state.fundraising})}>
                BACKGROUND INFORMATION
                <img src={this.state.fundraising ? Images.close : Images.add} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}}/>
              </div>
              {
                this.state.fundraising ? (
                  <div>
                    <div className="box_div_gray" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : null}} onClick={e=>this.setState({Contracts: !this.state.Contracts})}>
                      What are Smart Contracts?
                      <img src={this.state.Contracts ? Images.close_gray : Images.add_gray} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}}/>
                    </div>
                    {
                      this.state.Contracts ? (
                        <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : 22}}>
                        Smart contracts are computer protocols that execute the terms of a pre-defined ‘contract’ outlined in code. Smart contracts are the foundation of modern blockchains and eliminate the need for trusted intermediaries and middle-men.<br/><br/>The benefits of smart contracts include process simplification, fraud reduction / risk mitigation and an overall reduction in operational and administrative costs.
                        </div>
                      ) : null
                    }

                    <div className="box_div_gray" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : null}} onClick={e=>this.setState({on_chain: !this.state.on_chain})}>
                      What is on-chain / off-chain arbitrage?
                      <img src={this.state.on_chain ? Images.close_gray : Images.add_gray} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}}/>
                    </div>
                    {
                      this.state.on_chain ? (
                        <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : 22}}>
                        Due to the volatility of crypto-currencies, primarily driven by speculation and liquidity bottlenecks, stable on-chain assets become especially valuable.<br/><br/>If a traditional asset is tokenized successfully, and the community has a strong belief that this token is redeemable at any future date for the underlying asset, the value of the asset on-chain becomes more valuable that the original off-chain purchase price. This is due to the scarcity of stable assets on-chain.<br/><br/>This phenomena is known as on-chain / off-chain arbitrage.
                        </div>
                      ) : null
                    }

                    <div className="box_div_gray" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : null, marginBottom: 10}} onClick={e=>this.setState({currency_agnosticism: !this.state.currency_agnosticism})}>
                      What is currency agnosticism?
                      <img src={this.state.currency_agnosticism ? Images.close_gray : Images.add_gray} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}}/>
                    </div>
                    {
                      this.state.currency_agnosticism ? (
                        <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 15 : 22}}>
                        At Jibrel, we believe cash should be cash. Regardless of what currency it is in. For this reason, we developed the Poca Wallet, a currency-less wallet that can be used to purchase goods and services as well as transfer, receive or exchange funds, to and from any currency, anywhere. The wallet is fully currency agnostic.
                        </div>
                      ) : null
                    }

                  </div>
                ) : null
              }

            </div>
        </div>
    }
}

export default FAQ;
