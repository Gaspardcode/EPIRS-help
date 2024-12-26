namespace WinterPreparation;

public class Tools
{
    
    public static void PrintIEnumerable(IEnumerable<string> query)
    {
        Console.WriteLine($"{{ {string.Join(", ", query)} }}");
    }
    public static void PrintTab(string[] tab)
    {
        Console.WriteLine($"{{ {string.Join(", ", tab)} }}");
    }
    
    public static void PrintDictionary(Dictionary<string, double> dict)
    {
        Console.WriteLine("{");
        foreach (var (key, value) in dict)
        {
            Console.WriteLine($"  {key}: {value}");
        }
        Console.WriteLine("}");
    }
    
    public static void PrintDictionary(Dictionary<string, Smurf> dict)
    {
        Console.WriteLine("{");
        foreach (var (key, value) in dict)
        {
            Console.WriteLine($"  {key}: {value.Name}");
        }
        Console.WriteLine("}");
    }
    
    public static void PrintList(List<Smurf> list)
    {
        var lst = list.Select(s => s.Name).ToList();
        Console.WriteLine($"{{ {string.Join(", ", lst)} }}");
    }
    
    public static void PrintDictionary(Dictionary<Smurf, double> dict)
    {
        Console.WriteLine("{");
        foreach (var (key, value) in dict)
        {
            Console.WriteLine($"  {key.Name}: {value}");
        }
        Console.WriteLine("}");
    }
}