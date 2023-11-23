import React, { useEffect } from "react";
import styled from "styled-components";
import { wallet, dollar } from "../../utils/Icons";
import { useGlobalContext } from "../../context/globalContext";

function WalletAccountSummary() {
  const { walletaccoounts, getWalletAccounts } = useGlobalContext();

  useEffect(() => {
    getWalletAccounts();
  }, []);

  return (
    <WalletAccountSummaryStyled>
      <h2>Wallet Account</h2>
      {walletaccoounts.length === 0 ? ( // Check if there are no bank accounts
        <p className="no-accounts-message">
          No Bank account details to display.
        </p>
      ) : (
        <div className="bank-account-list">
          {walletaccoounts.map((account) => (
            <div className="bank-account-item" key={account._id}>
              <div className="bank-icon">
                <span className="bank-symbol"> {wallet}</span>
              </div>
              <div className="bank-details">
                <h3>{account.name}</h3>
                <p>Description: {account.description}</p>
              </div>
              <div className="amount">
                <span className="rupee-symbol">{dollar}</span>
                <p>{account.amount}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </WalletAccountSummaryStyled>
  );
}

const WalletAccountSummaryStyled = styled.div`
  .bank-account-list {
    /* Styling for the bank account list */
    margin-top: 1.5rem;
    .bank-account-item {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;

      .bank-symbol {
        margin-right: 1rem;
        font-size: 2rem;
      }
    }

    .bank-details {
      flex: 1;

      h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 0.9rem;
        color: rgba(34, 34, 96, 0.6);
        margin: 0.2rem 0;
      }
    }

    .amount {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .rupee-symbol {
        font-size: 1.2rem;
        color: var(--color-primary);
      }

      p {
        font-size: inherit;
        color: rgba(34, 34, 96, 0.9);
      }
    }
  }
  .no-accounts-message {
    font-size: 1.5rem;
    color: gray;
    text-align: center;
    margin: 2rem;
  }
`;

export default WalletAccountSummary;
