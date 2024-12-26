import Nav from "../components/Nav.jsx";
import Toggle from "../components/Toggle.jsx";
import CodeBlock from "../components/CodeBlock.jsx";

function CorrectionPage() {
    document.title = "Correction | WinterPreparation";
  return (
      <>
          <Nav page="correction"/>
            <section className="w-full p-16">
                <h2 className="text-6xl font-bold">Correction</h2>
                <p className="text-2xl italic text-red-700">This part shouldn't be visible by the student.</p>

                <Correction1 />
                <Correction2 />
                <Correction3 />
            </section>
      </>
  );
}

function Correction1() {
    return (
        <Toggle title="FirstParchment.cs" color="correction">
            <CodeBlock language="language-csharp">
{`namespace WinterPreparation;

public class FirstParchment
{
    /* ------------------------------------------------------------- */
    /* ---------------------- PART 1 ------------------------------- */
    /* ------------------------------------------------------------- */
    public static IEnumerable<string> GetFood(string[] box, string bug)
    {
        IEnumerable<string> query = from item in box
            where item != bug
            select item;
        return query;
    }
    
    public static IEnumerable<string> GetDescending(string[] box)
    {
        IEnumerable<string> query = from item in box
            orderby item descending
            select item;
        return query;
    }
    
    public static double GetWormPercentage(string[] box)
    {
        if (box.Length == 0)
            throw new ArgumentException("The box is empty.");
        double wormCount = (from item in box where item == "worm" select item).Count();
        return wormCount / box.Length * 100;
    }
    
    public static string[] GetFromCategoryOnly(string[] box1, string[] category)
    {
        IEnumerable<string> query = from item1 in box1
            join item2 in category on item1 equals item2
            select item1;
        return query.ToArray();
    }
}`}
            </CodeBlock>
        </Toggle>
    );
}

function Correction2() {
    return (
        <Toggle title="Smurf.cs" color="correction">
               <CodeBlock language="language-csharp">
{`namespace WinterPreparation;

public class Smurf
{
    public string Name { get; set; }
    public string Job { get; set; }
    public string Rank { get; set; }
    public int Age { get; set; }
    
    private static readonly List<string> _ranks = new List<string> { "Captain", "Deputy Captain", "Worker" };

    public Smurf(string name,string job, string rank, int age)
    {
        if (!_ranks.Contains(rank))
            throw new ArgumentException("Invalid rank");
        Name = name;
        Job = job;
        Rank = rank;
        Age = age;
    }
    
    /* ------------------------------------------------------------- */
    /* ---------------------- PART 2 ------------------------------- */
    /* ------------------------------------------------------------- */
    
    public static Smurf? GetCaptainSmurf(List<Smurf> smurfs) // PART 2
    {
        return smurfs
            .FirstOrDefault(s => s.Rank == "Captain");
    }
    
    public static List<Smurf> GetThreeYoungest(List<Smurf> smurfs) // PART 2
    {
        return smurfs
            .OrderBy(s => s.Age)
            .Take(3)
            .ToList();
    }
    
    public static List<Smurf> FilterByJob(List<Smurf> smurfs, string job)  // PART 2
    {
        return smurfs
            .Where(s => s.Job == job)
            .ToList();
    }
    
    public static double GetRankAverageAge(List<Smurf> smurfs, string rank)  // PART 2
    {
        return Math.Round(
            smurfs
                .Where(s => s.Rank == rank)
                .Average(s => s.Age),
            1
        );
    }
    
    public static List<Smurf> OlderThan(List<Smurf> smurfs, int age)  // PART 2
    {
        return smurfs
            .Where(s => s.Age > age)
            .ToList();
    }
    
    public static int DifferentJobs(List<Smurf> smurfs)  // PART 2
    {
        return smurfs
            .Select(s => s.Job)
            .Distinct()
            .Count();
        // return smurfs.GroupBy(s => s.Job).Count();
    }
    
    /* ------------------------------------------------------------- */
    /* ---------------------- PART 3 ------------------------------- */
    /* ------------------------------------------------------------- */
    
    public static Dictionary<string, double> AgePerRankDict(List<Smurf> smurfs)  // PART 3
    {
        return smurfs
            .GroupBy(s => s.Rank)
            .ToDictionary(
                g => g.Key, 
                g => g.Average(s => s.Age)
            );
    }
    
    public static List<Smurf> UniqueJobs(List<Smurf> smurfs)
    {
        return smurfs
            .GroupBy(s => s.Job)
            .Where(g => g.Count() == 1)
            .SelectMany(g => g)
            .ToList();
    }
    
    public static List<Smurf> SortSmurf(List<Smurf> smurfs)
    {
        return smurfs.OrderBy(s => _ranks.IndexOf(s.Rank)).ThenBy(s => s.Age).ToList();
    }
    
    public static Dictionary<string, Smurf> OldestPerJob(List<Smurf> smurfs)
    {
        return smurfs
            .GroupBy(s => s.Job)
            .ToDictionary(g => 
                g.Key, 
                g => g.OrderByDescending(s => s.Age).First()
            );
        // instead of First() you can use FirstOrDefault() or Last() or LastOrDefault()
    }
    
    public static List<Smurf>[] HasThisJob(List<Smurf>[] smurfs, string job)  // PART 3
    {
        return smurfs
            .Where(s => s.Any(smurf => smurf.Job == job))
            .ToArray();
    }
}`}
            </CodeBlock>
        </Toggle>
    );
}

function Correction3() {
    return (
        <Toggle title="Market.cs" color="correction">
            <CodeBlock language="language-csharp">
{`namespace WinterPreparation;

public class Market
{
    public List<Transaction> Transactions { get; set; }
    public List<Smurf> Sellers { get; set; }
    
    public Market(List<Transaction> transactions, List<Smurf> sellers)
    {
        Transactions = transactions;
        Sellers = sellers;
    }
    
    public static Dictionary<string, double> GetSmurfYearBalance(Market market, int year) // PART 4
    {
        Dictionary<string, double> res = market.Transactions
            .Where(t => t.TransactionDate.Year == year)
            .GroupBy(t => t.SmurfSeller)
            .ToDictionary(
                g => g.Key, 
                g => g.Sum(t => t.Price)
            );

        return res;
    }
    
    public static Dictionary<string, double> GetItemAverage(Market market) // PART 4
    {
        Dictionary<string,double> res = market.Transactions
            .GroupBy(t => t.Item)
            .ToDictionary(
                g => g.Key, 
                g => g.Average(t => t.Price)
            );

        return res;
    }
    
    public static Dictionary<Smurf, double> GetNMostExpensiveTransactionSmurf(Market market, int n) // PART 4
    {
        if (n > market.Transactions.GroupBy(t => t.SmurfSeller).Count())
        {
            throw new ArgumentException();
        }
        Dictionary<Smurf, double> res = market.Transactions
            .Join(market.Sellers, t => t.SmurfSeller, s => s.Name, (t, s) => new {t, s})
            .OrderByDescending(x => x.t.Price)
            .GroupBy(x => x.s)
            .Take(n)
            .ToDictionary(
                g => g.Key, 
                g => g.Max(x => x.t.Price)
            );
        return res;
    }

    public static List<string> GetJobArticleSeller(Market market, string article) // PART 4
    {
        List<string> res = market.Transactions
            .Join(market.Sellers, t => t.SmurfSeller, s => s.Name, (t, s) => new { t, s })
            .Where(x => x.t.Item == article)
            .Select(x => x.s.Job)
            .Distinct()
            .ToList();
        return res;
    }
}`}
            </CodeBlock>
        </Toggle>
    );
}

export default CorrectionPage;