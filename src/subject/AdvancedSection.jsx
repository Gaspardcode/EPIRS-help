import React from "react";
import Toggle from "../components/./Toggle.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import {AllowedMessage, HelpMessage, HistoryMessage, TestMessage} from "../components/HighlightedMessage.jsx";
import P from "../components/P.jsx";
import A from "../components/A.jsx";

function AdvancedSection() {
  return (
      <>
          <section className="w-full px-16 py-8">
              <h2 className="text-6xl font-bold">Advanced Section</h2>
              <Part4/>
          </section>
          {/*<SubjectNav currentIndex={3}/>*/}
      </>
  );
}

function Part4() {
    return (
        <Toggle title="Part 4: Welcome to the market" color="advanced">
            <HistoryMessage>
                <P>Ok, now we have achieve to organize our groups. We are able to get our own supplies quickly and
                    efficiently now. But it's not enough, there is not much time left !! Hopefully, Papa Smurf has an
                    idea, it's time to get into the market! And who's better than you, our new experimented Smurf-Coder,
                    for this perilous mission.</P>
            </HistoryMessage>
            <div className="h-8"/>
            <span className="text-3xl text-red-600">Transaction.cs</span>
            <Annexe2/>
            <div className="h-8"/>
            <span className="text-3xl text-red-600">Market.cs</span>
            <Annexe3/>
            <AdvancedExo1/>
            <AdvancedExo2/>
            <AdvancedExo3/>
            <AdvancedExo4/>
        </Toggle>
    );
}

function Annexe2() {
    return (
        <Toggle title="Transaction" color="advanced">
            <P>You can copy-paste that class in <code>Transaction.cs</code></P>
            <div className="h-4"/>
           <P>
               Each Transaction is represented by three properties:
                <ul className="list-disc pl-8">
                    <li><code>SmurfSeller</code> : The name of the Smurf who sold the item</li>
                    <li><code>Item</code> : The name of the item sold</li>
                    <li><code>Price</code> : The price of the item</li>
                    <li><code>TransactionDate</code> : The date of the transaction</li>
                </ul>
           </P>
            <div className="h-4"/>
            <CodeBlock language="language-csharp">
                {`public class Transaction
{
    public string SmurfSeller { get; set; }
    public string Item { get; set; }
    // public int Quantity { get; set; }
    public double Price { get; set; }
    public DateTime TransactionDate { get; set; }
    
    public Transaction(string smurfSeller, string item, double price, DateTime transactionDate)
    {
        SmurfSeller = smurfSeller;
        Item = item;
        Price = price;
        TransactionDate = transactionDate;
    }
}`}
            </CodeBlock>
        </Toggle>
    );
}

function Annexe3() {
    return (
        <Toggle title="Market" color="advanced">
            <P>You can copy-paste that class in <code>Market.cs</code></P>
            <div className="h-4"/>
            <P>
                The Market is represented by two properties:
                <ul className="list-disc pl-8">
                    <li><code>Transactions</code> : A list of all the transactions made in the market</li>
                    <li><code>Sellers</code> : A list of all the Smurfs who have possibly sold an item in the market</li>
                </ul>
            </P>
            <HelpMessage>
                <P>All Smurf have different names and are unique.</P>
            </HelpMessage>
            <div className="h-4"/>
            <CodeBlock language="language-csharp">
{`public class Market
{
    public List<Transaction> Transactions { get; set; }
    public List<Smurf> Sellers { get; set; }
    
    public Market(List<Transaction> transactions, List<Smurf> sellers)
    {
        Transactions = transactions;
        Sellers = sellers;
    }
}`}
            </CodeBlock>
            <TestMessage>
                <CodeBlock language="language-csharp">
                    {`Market market = new Market(
    new List<Transaction>()
    {
        new Transaction("Hefty Smurf", "Apples", 10, new DateTime(2021, 3, 30)),
        new Transaction("Hefty Smurf", "Carrots", 10, new DateTime(2021, 3, 30)),
        new Transaction("Hefty Smurf", "Potatoes", 5, new DateTime(2020, 9, 8)),
        new Transaction("Brainy Smurf", "Apples", 14, new DateTime(2020, 7, 1)),
        new Transaction("Papa Smurf", "Potatoes", 4, new DateTime(2020, 12, 12)),
        new Transaction("Papa Smurf", "Apples", 26, new DateTime(2019, 11, 15)),
        new Transaction("Hefty Smurf", "Potatoes", 42, new DateTime(2019, 5, 6)),
        new Transaction("Brainy Smurf", "Apples", 9, new DateTime(2019, 3, 7)),
        new Transaction("Papa Smurf", "Potatoes", 19, new DateTime(2019, 8, 8)),
    },
    new List<Smurf>() {
        new Smurf("Papa Smurf", "Alchemist", "Worker", 215),
        new Smurf("Smurfette", "Farmer", "Worker", 26),
        new Smurf("Brainy Smurf", "Scriber", "Worker", 72),
        new Smurf("Hefty Smurf", "Blacksmith", "Worker", 48),
        new Smurf("Clumsy Smurf", "Builder", "Worker", 16),
    }
);`}
                </CodeBlock>
            </TestMessage>
        </Toggle>
    );
}

function AdvancedExo1() {
  return (
      <Toggle title="GetSmurfYearBalance" color="advanced">
          <HistoryMessage>
                <P>Papa Smurf think that the ones who make the more benefits may propose the best item. In consequence, he wants to be able to check tha balance of each Seller by year.</P>
          </HistoryMessage>
          <P>Create the function <code>GetSmurfYearBalance</code> which take a market and a year in parameter and return a Dictionary with each Smurf who had transactions for key (not the others), and their balance for value.</P>
          <CodeBlock language="language-csharp">
{`public static Dictionary<string, double> GetSmurfYearBalance(Market market, int year) // PART 4
{
    // TODO
    throw new NotImplementedException();
}`}
          </CodeBlock>

          <TestMessage>
                <CodeBlock language="language-csharp">
{`Tools.PrintDictionary(Market.GetSmurfYearBalance(market, 2019));  // { Papa Smurf: 45, Hefty Smurf: 42, Brainy Smurf: 9 }
Tools.PrintDictionary(Market.GetSmurfYearBalance(market, 2021));  // { Hefty Smurf: 20 }`}
                </CodeBlock>
          </TestMessage>
      </Toggle>
  );
}

function AdvancedExo2() {
    return (
        <Toggle title="GetItemAverage" color="advanced">
            <HistoryMessage>
                <P>Now that we have the balance of each Smurf, we can see that some items are more expensive than others. We need to know the average price of each item to be able to make the best choices.</P>
            </HistoryMessage>
            <P>Create the function <code>GetItemAverage</code> which take a market in parameter and return a Dictionary with each item for key, and the average price of the item for value.</P>
            <CodeBlock language="language-csharp">
{`public static Dictionary<string, double> GetItemAverage(Market market) // PART 4
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>

            <TestMessage>
                <CodeBlock language="language-csharp">
{`Tools.PrintDictionary(Market.GetItemAverage(market));  // { Apples: 14.75, Carrots: 10, Potatoes: 17.5 }`}
                </CodeBlock>
            </TestMessage>
        </Toggle>
    );
}

function AdvancedExo3() {
    return (
        <Toggle title="GetNMostExpensiveTransactionSmurf" color="advanced">
            <HistoryMessage>
                <P>Now that we have the average price of each item, we can see that some Smurfs are more likely to buy expensive items. We need to know who are the Smurfs who have made the most expensive transactions.</P>
            </HistoryMessage>
            <P>Create the function <code>GetNMostExpensiveTransactionSmurf</code> which take a market and an integer <code>n</code> in parameter and return a Dictionary with the <code>n</code> most expensive Smurf for key, and the total amount of their transactions for value.</P>
            <CodeBlock language="language-csharp">
{`public static Dictionary<Smurf, double> GetNMostExpensiveTransactionSmurf(Market market, int n) // PART 4
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>

            <TestMessage>
                <CodeBlock language="language-csharp">
{`Tools.PrintDictionary(Market.GetNMostExpensiveTransactionSmurf(market, 1)); // { Hefty Smurf: 42 }
Tools.PrintDictionary(Market.GetNMostExpensiveTransactionSmurf(market, 3)); // { Hefty Smurf: 42, Papa Smurf: 26, Brainy Smurf: 14 }
Tools.PrintDictionary(Market.GetNMostExpensiveTransactionSmurf(market, 5)); // ArgumentException`}
                </CodeBlock>
            </TestMessage>
            <AllowedMessage>
                <P>The usage of the <A href="https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.join?view=net-8.0">Join</A> method is mandatory for this function.</P>
            </AllowedMessage>
        </Toggle>
    );
}

function AdvancedExo4() {
    return (
        <Toggle title="GetJobArticleSeller" color="advanced">
            <HistoryMessage>
                <P>Now we can see that some jobs are more likely to sell some items. But according to the job of the person who sell it, the quality can be better/worse. Help Papa Smurf to fetch these informations quickly.</P>
            </HistoryMessage>
            <P>Create the function <code>GetJobArticleSeller</code> which take a market and an article in parameter and return a list of all the jobs of all Smurfs who have sold this article (without repetition).</P>
            <CodeBlock language="language-csharp">
{`public static List<string> GetJobArticleSeller(Market market, string article) // PART 4
{
    // TODO
    throw new NotImplementedException();
}`}
            </CodeBlock>

            <TestMessage>
                <CodeBlock language="language-csharp">
{`Tools.PrintIEnumerable(Market.GetJobArticleSeller(market, "Apples"));  // { Blacksmith, Scriber, Alchemist }
Tools.PrintIEnumerable(Market.GetJobArticleSeller(market, "Potatoes"));  // { Blacksmith, Alchemist }
Tools.PrintIEnumerable(Market.GetJobArticleSeller(market, "Carrots"));  // { Blacksmith }`}
                </CodeBlock>
            </TestMessage>
            <AllowedMessage>
                <P>The usage of the <A href="https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.join?view=net-8.0">Join</A> method is mandatory for this function.</P>
            </AllowedMessage>
        </Toggle>
    );
}


export default AdvancedSection;