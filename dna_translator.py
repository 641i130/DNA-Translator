# DNA Translator
DNA = input("Input some DNA to translate: ")
# Add if the letters input aren't TAGC
mRNA = []
tRNA = []
DNA_for = "|".join([DNA[i:i+3] for i in range(0, len(DNA), 3)])
print("The  DNA is: " + DNA_for)
def check(a,b,word):
    if a in let:
        word.append(b)
# Translates DNA to mRNA
for let in DNA:
    check("T","A", mRNA)
    check("A","U", mRNA)
    check("C","G", mRNA)
    check("G","C", mRNA)
mRNA = ''.join(mRNA)
mRNA_for = "|".join([mRNA[i:i+3] for i in range(0, len(mRNA), 3)])
print("The mRNA is: " + mRNA_for)

# Trnaslates mRNA to tRNA
for let in mRNA:
    check("A","U", tRNA)
    check("U","A", tRNA)
    check("G","C", tRNA)
    check("C","G", tRNA)
tRNA = ''.join(tRNA)
tRNA_for = "|".join([tRNA[i:i+3] for i in range(0, len(tRNA), 3)])
print("The tRNA is: " + tRNA_for)
