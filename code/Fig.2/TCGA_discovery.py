# This code is for Fig.2
# Examine the relation of all protein coding genes with OS
import pandas as pd


# In this case, we loaded TCGA breast cancer discovery cohort
data = pd.read_csv ('../../data/TCGA/TCGA_breast.csv', index_col=0)
# The final results will be returned into this dictionary
results= {}

def logrank_test (gene): # usage: logrank_test(gene_name)
    global data_copy 
    data_copy = data.copy ()
    # If the expression level of that particular gene is above the median, group the patient into 'H' or 'high' subset
    # Conversely, when below median, we allocated her to 'L' or 'low' group.
    data_copy[gene] = data_copy['H'].where(data_copy[gene] > data_copy[gene].median(), data['L'])
    # For convinience, we handle only the expression level of that gene and OS-related clinical information
    tmpfile = data_copy[['OS_MONTHS','OS_STATUS',gene]]
    tmpfile.to_csv ('tmp.csv')
    data_copy = pd.read_csv ('tmp.csv')
    High = (data_copy[gene] == "H")
    T = data_copy['OS_MONTHS']
    E = data_copy['OS_STATUS']
    # We used lifelines package
    # https://lifelines.readthedocs.io/en/latest/index.html
    # You can install it: pip install lifelines
    from lifelines.statistics import logrank_test
    result = logrank_test(T[High], T[~High], E[High], E[~High], alpha=0.95)
    return result

def main ():
    genelist = data.columns[12089:]
    for gene in genelist:
        try:
            gene=gene.strip()
            if data[gene].median () ==0:
                continue
            print (gene+'is under calculation')
            p0 = logrank_test (gene).p_value
            results[gene] = [p0]
        except:
            print ('Something wrong happened! ')
            continue

    # Export the result as a csv file.
    pd.DataFrame(results).T.to_csv ('TCGA_prognostic.csv')


if __name__ == '__main__':
    main ()
