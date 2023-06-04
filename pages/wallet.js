

import toast, { Toaster } from "react-hot-toast";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
    Connection,
    SystemProgram,
    Transaction,
    PublicKey,
    LAMPORTS_PER_SOL,
    clusterApiUrl,
    SendTransactionError,
} from "@solana/web3.js";


const SOLANA_NETWORK = "devnet";

const Home = () => {
    const [publicKey, setPublicKey] = useState(null);
    const router = useRouter();
    const [balance, setBalance] = useState(0);
    const [receiver, setReceiver] = useState(null);
    const [amount, setAmount] = useState(null);
    const [explorerLink, setExplorerLink] = useState(null);

    useEffect(() => {
        let key = window.localStorage.getItem("publicKey"); //obtiene la publicKey del localStorage
        setPublicKey(key);
        if (key) getBalances(key);
        if (explorerLink) setExplorerLink(null);
    }, []);

    const handleReceiverChange = (event) => {
        setReceiver(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = async () => {
        console.log("Este es el receptor", receiver);
        console.log("Este es el monto", amount);
        sendTransaction();
    };

    

    //Funcion para Iniciar sesion con nuestra Wallet de Phantom

    const signIn = async () => {
        //Si phantom no esta instalado
        const provider = window?.phantom?.solana;
        const { solana } = window;

        if (!provider?.isPhantom || !solana.isPhantom) {
            toast.error("Phantom no esta instalado");
            setTimeout(() => {
                window.open("https://phantom.app/", "_blank");
            }, 2000);
            return;
        }
        //Si phantom esta instalado
        let phantom;
        if (provider?.isPhantom) phantom = provider;

        const { publicKey } = await phantom.connect(); //conecta a phantom
        console.log("publicKey", publicKey.toString()); //muestra la publicKey
        setPublicKey(publicKey.toString()); //guarda la publicKey en el state
        window.localStorage.setItem("publicKey", publicKey.toString()); //guarda la publicKey en el localStorage

        toast.success("Tu Wallet esta conectada 👻");

        getBalances(publicKey);
    };

    //Funcion para cerrar sesion con nuestra Wallet de Phantom

    const signOut = async () => {
        if (window) {
            const { solana } = window;
            window.localStorage.removeItem("publicKey");
            setPublicKey(null);
            solana.disconnect();
            router.reload(window?.location?.pathname);
        }
    };
    
    //Funcion para obtener el balance de nuestra wallet

    const getBalances = async (publicKey) => {
        try {
            const connection = new Connection(
                clusterApiUrl(SOLANA_NETWORK),
                "confirmed"
            );

            const balance = await connection.getBalance(
                new PublicKey(publicKey)
            );

            const balancenew = balance / LAMPORTS_PER_SOL;
            setBalance(balancenew);
        } catch (error) {
            console.error("ERROR GET BALANCE", error);
            toast.error("Something went wrong getting the balance");
        }
    };

    //Funcion para enviar una transaccion
    const sendTransaction = async () => {
        try {
            //Consultar el balance de la wallet
            getBalances(publicKey);
            console.log("Este es el balance", balance);

            //Si el balance es menor al monto a enviar
            if (balance < amount) {
                toast.error("No tienes suficiente balance");
                return;
            }

            const provider = window?.phantom?.solana;
            const connection = new Connection(
                clusterApiUrl(SOLANA_NETWORK),
                "confirmed"
            );

            //Llaves

            const fromPubkey = new PublicKey(publicKey);
            const toPubkey = new PublicKey(receiver);

            //Creamos la transaccion
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey,
                    toPubkey,
                    lamports: amount * LAMPORTS_PER_SOL,
                })
            );
            console.log("Esta es la transaccion", transaction);

            //Traemos el ultimo blocke de hash
            const { blockhash } = await connection.getLatestBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = fromPubkey;

            //Firmamos la transaccion
            const transactionsignature = await provider.signTransaction(
                transaction
            );

            //Enviamos la transaccion
            const txid = await connection.sendRawTransaction(
                transactionsignature.serialize()
            );
            console.info(`Transaccion con numero de id ${txid} enviada`);
            //Esperamos a que se confirme la transaccion
            const confirmation = await connection.confirmTransaction(txid, {
                commitment: "singleGossip",
            });

            const { slot } = confirmation.value;

            console.info(
                `Transaccion con numero de id ${txid} confirmado en el bloque ${slot}`
            );

            const solanaExplorerLink = `https://explorer.solana.com/tx/${txid}?cluster=${SOLANA_NETWORK}`;
            setExplorerLink(solanaExplorerLink);

            toast.success("Transaccion enviada con exito :D ");

            //Actualizamos el balance
            getBalances(publicKey);
            setAmount(null);
            setReceiver(null);

            return solanaExplorerLink;
        } catch (error) {
            console.error("ERROR SEND TRANSACTION", error);
            toast.error("Error al enviar la transaccion");
        }
    };


    return (
     
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
            
            <button
            className="navbar-brand" href="shop">
            <img src="images/logo.png" alt="" />
            <span>PetShop</span>
            
           </button>


            <div className="flex flex-col  w-auto h-auto  bg-white">
                <div className="flex flex-col py-24 place-items-center justify-center">
                    <h1 className="text-5xl font-bold pb-10 text-blue">
                    🐶 PetShop 🐕
                    </h1>

                    {publicKey ? (
                        <div className="flex flex-col py-24 place-items-center justify-center">
                         

                            <h1 className="text-2xl font-bold text-green">
                             <center> Tu numero de Wallet es:  </center>   <br /> { publicKey }
                            </h1>

                            <br />

                            <h1 className="text-2xl font-bold text-purple">
                                 Tu balance es { balance } SOL
                            </h1>
                            <br />
                            <h1 className="text-2xl  text-purple">
                                Enviar una transaccion a:
                            </h1>

                            <input
                                className="h-8 w-72 mt-4   border-2 border-purple "
                                type="text"
                                onChange={handleReceiverChange}
                            />
                            <br />
                            <h1 className="text-2xl  text-purple">
                                Cantidad de SOL a enviar:
                            </h1>
                            <input
                                className="h-8 w-72 mt-4   border-2 border-purple "
                                type="text"
                                onChange={handleAmountChange}
                            />
                            <br />
                            <button
                                type="submit"
                                className="inline-flex h-8 w-52 justify-center bg-blue-500 font-bold text-black"
                                onClick={() => {
                                    handleSubmit();
                                }}
                            >
                                Enviar 🐕
                            </button>
                            <br />
                            <a href={explorerLink}>

                            <h1 className="text-2xl font-bold text-purple">
                                {explorerLink}
                            </h1>
                            </a>
                            <br />

                            <button
                                type="submit"
                                className="inline-flex h-8 w-52 justify-center bg-blue-500 font-bold text-black"
                                onClick={() => {
                                    signOut();
                                }}
                            >
                                Desconecta tu wallet 👻
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col place-items-center justify-center">
                            <button
                                type="submit"
                                className="inline-flex h-8 w-52 justify-center bg-blue-500 font-bold text-blak"
                                onClick={() => {
                                    signIn();
                                }}
                            >
                                Conecta tu wallet 👻
                            </button>

                        </div>
                    )}
                </div>
                <Toaster position="bottom-center" />
            </div>
            </nav>
        </div>
    );
};

export default Home;
