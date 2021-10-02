const questions = [
    {
        question: "An individual who applies for and receives funds in the form of a loan and is obligated to repay the loan in full under the terms of the loan.",
        optionA: "Borrower (Mortgagor)",
        optionB: "Lender",
        optionC: "Recipient",
        optionD: "Insurer",
        correctOption: "optionA"
    },
    {
        question: "Document that gives evidence of ownership of a property. Also indicates the rights of ownership and possession of the property. Individuals who will have legal ownership in the property are considered ---------- and will sign the mortgage and other documentation",
        optionA: "On Title",
        optionB: "In Inscription",
        optionC: "On Affidavit",
        optionD: "At Will",
        correctOption: "optionA"
    },
    {
        question: "The process of paying off one loan with the proceeds from a new loan secured by the same property.",
        optionA: "Cash-out",
        optionB: "Refinancing",
        optionC: "Recapitalize",
        optionD: "Remortgage",
        correctOption: "optionB"
    },
    {
        question: "A licensed neutral third party that distributes legal documents and funds on behalf of a buyer and seller. The authority to ensure that the seller, lender, and borrower all follow through on their agreed upon terms. Escrow coordinates and keeps records of what is going on between all the parties--seller, borrower, lender and title company.",
        optionA: "Escrow Seller",
        optionB: "Escrow agent",
        optionC: "Escrow Company",
        optionD: "Escrow Buyer",
        correctOption: "optionC"
    },
    {
        question: "A person with fiduciary responsibility to the buyer and seller, or the borrower and lender, to ensure that the terms of the purchase/sale or loan are carried out.",
        optionA: "Escrow Company",
        optionB: "Escrow Seller",
        optionC: "Escrow Buyer",
        optionD: "Escrow Agent",
        correctOption: "optionD"
    },
    {
        question: "Ensures that a piece of real estate is legitimate, then issues title insurance for that property that protects both the lender and the owner from lawsuits as a result of title disputes. Their main responsibility in a mortgage transaction is to accurately record liens, lien holders and ownership to the property in a transaction--anything that is being recorded against the property. They ensure that all liens, lien holders and ownership is recorded with the county the property resides in.",
        optionA: "Title Company",
        optionB: "Will Company",
        optionC: "Inscription Company",
        optionD: "Affidavit Company",
        correctOption: "optionA"
    },
    {
        question: "Insurance that protects a lender against any title dispute that may arise over a particular property. It is required to close on a residence. A homeowner may also purchase owner's --------.",
        optionA: "Will Insurance",
        optionB: "Title Insurance",
        optionC: "Health Insurance",
        optionD: "Car Insurance",
        correctOption: "optionB"
    },
    {
        question: "The -------- is the bank that is lending the money. The -------- has the biggest role in the process, because without them lending the money, there would be no need for a title or escrow company. This is the reason why the majority of the documents in your loan signings are -------- documents.",
        optionA: "Mortgagor",
        optionB: "Borrower",
        optionC: "Lender",
        optionD: "Insurer",
        correctOption: "optionC"
    },
    {
        question: "The --------, also known as the mortgage in some states, has 5 main functions: 1) It records who actually owns the property: e.g. Jane Doe and John Doe, husband and wife as joint tenants; 2) It records the amount the borrower is borrowing (the lien amount); 3) It records who is lending the money (the lien holder); 4) It records the legal description of the property (how the county recognizes the property location via lot boundaries and lot location within the county); 5) It states the rules and regulations which the property owner must abide by.",
        optionA: "Grant Deed",
        optionB: "Quitclaim Deed",
        optionC: "Warranty Deed",
        optionD: "Deed of Trust",
        correctOption: "optionD"
    },
    {
        question: "Amendments to the deed of trust that are recorded with the deed. Something the lender wants to add to the deed.",
        optionA: "Rider",
        optionB: "powers of attorney",
        optionC: "Contracter",
        optionD: "Witness",
        correctOption: "optionA"
    },
    {
        question: "The amount of debt, not counting interest, left on a loan.",
        optionA: "Capital sum",
        optionB: "Principal",
        optionC: "Working capital",
        optionD: "Left-overs",
        correctOption: "optionB"
    },
    {
        question: "Document outlining the terms of the loan. For example, the --------- would specify that the borrower is borrowing $300,000 at a 4% interest rate, and will have a certain fixed payment for 30 years. Also called the contract.",
        optionA: "Bill",
        optionB: "Transcript",
        optionC: "Note",
        optionD: "Report",
        correctOption: "optionC"
    },
    {
        question: "The cost to the borrower for the money the bank lends to them.",
        optionA: "Bank rate",
        optionB: "Borrowing rate",
        optionC: "Annual percentage rate",
        optionD: "Interest Rate",
        correctOption: "optionD"
    },
    {
        question: "Phrase indicating the interest rate will not change for the duration of the loan. This allows the payment to stay the same for the full amount of the term.",
        optionA: "Fixed Rate Note",
        optionB: "Interest Rate Note",
        optionC: "Borrow Rate Note",
        optionD: "Lender Rate Note",
        correctOption: "optionA"
    },
    {
        question: "A line of credit that is tied to the equity of the borrower's residence. Ex, the home is worth $500,000 and there is a first loan for $200,000, that means there is $300,000 of equity. In this example, a bank may approve the borrower for a line of credit for $100,000. The line of credit works like credit card. The borrower makes payments on the amount they have borrowed on the --------------.",
        optionA: "Adjustable Mortgage Line of Credit (AMLOC)",
        optionB: "Bank Line of Credit (BLOC)",
        optionC: "Home Equity Line of Credit (HELOC)",
        optionD: "Wester-Shamrock Loan (WSL)",
        correctOption: "optionC"
    },
    {
        question: "Enables older homeowners (62+) to convert part of the equity in their homes into tax-free income without having to sell the home, give up title, or take on a new monthly mortgage payment. Instead of making monthly payments to a lender, as with a regular mortgage, a lender makes payments to the owner, based off the equity in the residence.",
        optionA: "Adjustable-rate Mortgage",
        optionB: "Forward Mortgage",
        optionC: "Fixed-rate Mortgage",
        optionD: "Reverse Mortgage",
        correctOption: "optionD"
    },
    {
        question: "When the borrower has not lived up to the agreed upon terms of repayment on the loan.",
        optionA: "Nonpayment",
        optionB: "Default",
        optionC: "Levant",
        optionD: "Failure",
        correctOption: "optionB"
    },
    {
        question: "The process initiated by the lender when the borrower has not made the agreed upon repayments. The bank can take the property away from the borrower. The lender will then own the property. Most lenders start the ---------- process after 3 consecutive missed payments.",
        optionA: "Forestall",
        optionB: "Close out",
        optionC: "Foreclosure",
        optionD: "zzzzzzzzz",
        correctOption: "optionC"
    },	
    {
        question: "Taxes that are due to the county where the property resides. Usually due twice a year.",
        optionA: "Property tax",
        optionB: "Mortgage tax",
        optionC: "State tax",
        optionD: "Real estate tax",
        correctOption: "optionA"
    },
    {
        question: "<b>True or False: </b>The impound account and escrow account are an account established to collect property tax and hazard/fire insurance on the property. Sometimes required by the lender as a term of the loan. The impound account and escrow account are the same thing. As the taxes and insurance come due, the lender will make the payments for the borrower. Not all borrowers are required to have an impound account, but they may prefer it.",
        optionA: "False",
        optionB: "True",
        optionC: "zzzzzzzzz",
        optionD: "zzzzzzzzz",
        correctOption: "optionB"
    },
    {
        question: "Repayment of a loan with periodic payments of both principal and interest calculated to pay off the loan at the end of a fixed period of time.",
        optionA: "Settlement",
        optionB: "Restitution",
        optionC: "Amortization",
        optionD: "Subsidy",
        correctOption: "optionC"
    },
    {
        question: "Document that replaces what used to be called the truth in lending form. Informs the borrower about everything pertinent about the loan; all costs associated with the transaction, just like the closing statement. The lender must disclose everything about the loan so the borrower has a concise look at what they are getting in to. This form is a little redundant as it has information found on different forms throughout the loan documents.",
        optionA: "Opening Exposure",
        optionB: "Closing Divulgence",
        optionC: "Closing Acknowledgment",
        optionD: "Closing Disclosure",
        correctOption: "optionD"
    },
    {
        question: "Protects the insured against loss due to fire or other natural disaster in exchange for a premium paid to the insurer.",
        optionA: "Hazard Insurance",
        optionB: "Life Insurance",
        optionC: "Fire Insurance",
        optionD: "Accidental Insurance",
        correctOption: "optionA"
    },
    {
        question: "<b>True or False: </b>PITI stands for -- Principal, Interest, Taxes and Insurance -- the components of a monthly mortgage payment.",
        optionA: "False",
        optionB: "True",
        optionC: "zzzzzzzzz",
        optionD: "zzzzzzzzz",
        correctOption: "optionB"
    },
    {
        question: "<b>True or False: </b> BHS loans are designed to make housing more affordable, particularly for first-time home buyers. BHS loans typically permit borrowers to buy a home with a lower down payment than conventional loans. With BHS insurance, eligible buyers can purchase a home with a down payment of as little as 3% of the appraised value or the purchase price, whichever is lower.",
        optionA: "zzzzzzzzz",
        optionB: "zzzzzzzzz",
        optionC: "False",
        optionD: "True",
        correctOption: "optionC"
    },
    {
        question: "Fixed-rate loans guaranteed by the U.S. Department of Veterans Affairs. They are designed to make housing affordable for eligible U.S. veterans. ----------- are available to veterans, reservists, active-duty personnel, and surviving spouses of veterans with 100% entitlement. Eligible veterans may be able to purchase a home with no down payment, no cash reserve, no application fee, and lower closing costs than other financing options.",
        optionA: "VAN Loans",
        optionB: "BS Loans",
        optionC: "WA Loans",
        optionD: "VA Loans",
        correctOption: "optionD"
    },
    {
        question: "The borrower signs this form to give permission to lender to request and receive a copy of the borrower's taxes that are filed with the IRS.",
        optionA: "4506",
        optionB: "4365",
        optionC: "4403",
        optionD: "3542",
        correctOption: "optionA"
    },
    {
        question: "Document that describes escrow's role and responsibility during the transaction to the borrower.",
        optionA: "Escrow Directions",
        optionB: "Escrow Instructions",
        optionC: "Escrow Insurance",
        optionD: "Escrow Amendment",
        correctOption: "optionB"
    },
    {
        question: "Describes any changes made to the original escrow instructions.",
        optionA: "Escrow Remedy",
        optionB: "Escrow Instructions",
        optionC: "Escrow Amendment",
        optionD: "Escrow Amelioration",
        correctOption: "optionC"
    },
    {
        question: "Escrow Amendment Describes any changes made to the original escrow instructions. ------------- Document that brings together all of escrow, title and the lender's fees for the borrower to see and approve. Escrow creates the ----------.",
        optionA: "Closing Amendment",
        optionB: "Closing Clause",
        optionC: "Opening Enrollment",
        optionD: "Closing Statement",
        correctOption: "optionD"
    },
    {
        question: "Document where the borrower lets escrow know what insurance company they use. Incudes insurance company name, policy # and the insurance agent's name and phone number.",
        optionA: "Insurance Information Sheet",
        optionB: "Borrower Information Sheet",
        optionC: "Insurance Open Policy",
        optionD: "Disbursement of Proceeds",
        correctOption: "optionA"
    },
    {
        question: "Document that informs escrow how the borrower wants to receive funds that may be due after closing.",
        optionA: "Insurance Information Sheet",
        optionB: "Disbursement of Proceeds",
        optionC: "Insurance Closing Policy",
        optionD: "Insurance Disclosure Sheet",
        correctOption: "optionB"
    },
    {
        question: "Document that gives escrow all the information they need to open escrow. The current payoff, whom they owe and how much, any private liens, HOA info and/or insurance information.",
        optionA: "Insurance Information Sheet",
        optionB: "Borrower Disclosure Sheet",
        optionC: "Borrower Information Sheet",
        optionD: "Payoff Demand/Payoff Statement",
        correctOption: "optionC"
    },
    {
        question: "Document that shows what the borrower owes their current lender. Escrow is responsible for ordering the demand statement from the current lender. They then present it to the borrower for approval to pay off the amount stated.",
        optionA: "Insurance Information Sheet",
        optionB: "Borrower Information Sheet",
        optionC: "zzzzzzzzz",
        optionD: "Payoff Demand/Payoff Statement",
        correctOption: "optionD"
    },
    {
        question: "An application for title insurance.",
        optionA: "Statement of Information (S.I.)",
        optionB: "Statement of Insurance (S.I.)",
        optionC: "Statement of Income (S.I.)",
        optionD: "zzzzzzzzz",
        correctOption: "optionA"
    },
    {
        question: "Document that changes the way property title is held. Could be from a seller to a buyer, or an owner changing the way they currently hold title. For instance, an owner got married and is adding their spouse to the property or an owner is putting their house in a trust.",
        optionA: "Insurance Disclosure Sheet",
        optionB: "Grant ​Deed/Quitclaim Deed",
        optionC: "Payoff Demand/Payoff Statement",
        optionD: "Disbursement of Proceeds",
        correctOption: "optionB"
    },
    {
        question: "Document that proves that a borrower has an established valid trust, in lieu of actually providing the whole entire trust (which at times could exceed 100 pages). If the property is held in a trust in any matter, a --------- has to be filled out.",
        optionA: "Allotment Fund",
        optionB: "Trust Allotment",
        optionC: "Trust Certification",
        optionD: "zzzzzzzzz",
        correctOption: "optionC"
    },
    {
        question: "<b>True or False: </b> P.C.O.R. Stands for Preamble Change of Occupancy Report.",
        optionA: "zzzzzzzzz",
        optionB: "zzzzzzzzz",
        optionC: "True",
        optionD: "False",
        correctOption: "optionD"
    },
    {
        question: "Document stating that the loans in the subordinate position stay in the same lien position even though the lien above them has been paid off. This allows is a new lien holder to go into the empty 1st position. As an example, if someone refinances a first but there is also a second on the property, the new lender will only approve the loan if their loan will goes in the first lien position.",
        optionA: "Subordination Agreement",
        optionB: "Payoff Demand/Payoff Statement",
        optionC: "Insurance Information Agreement",
        optionD: "Escrow Insurance",
        correctOption: "optionA"
    },
    {
        question: "<b>True or False: </b>When a lien is recorded, its position of importance is noted on the title. If a lien is recorded in the first position, it is the first to be paid off. Most mortgages are first liens. If something happens to the property, the lien recorded in the first position gets paid first. There can be a number of lien positions (1st, 2nd, 3rd, etc.). As liens are paid off, the lien that was in the next position moves into the lien position that had been vacated.",
        optionA: "False",
        optionB: "True",
        optionC: "zzzzzzzzz",
        optionD: "zzzzzzzzz",
        correctOption: "optionB"
    },
    {
        question: "Covers anything that may happen to the residence like a fire, flood or anything can happen to the structure of the house. Banks won't lend against a residence that is not insured.",
        optionA: "Accidental Insurance",
        optionB: "Fire Insurance",
        optionC: "Hazard Insurance",
        optionD: "Car Insurance",
        correctOption: "optionC"
    },
    {
        question: "<b>True or False: </b>When someone gives another person authority to sign on their behalf. For instance, a spouse who is in the military and is deployed might give their spouse <b>Power of Attorney</b> to sign loan docs on their behalf.",
        optionA: "zzzzzzzzz",
        optionB: "zzzzzzzzz",
        optionC: "False",
        optionD: "True",
        correctOption: "optionD"
    },
    {
        question: "The contract between the buyer and seller on the terms of the sale.",
        optionA: "Purchase Contract",
        optionB: "Open Contract",
        optionC: "Property Contract",
        optionD: "Acquisition Contract",
        correctOption: "optionA"
    },
    {
        question: "This tells the lender whether the property being bought or refinanced is a primary residence, second home or investment property.",
        optionA: "Ownership Oath",
        optionB: "Occupancy Affirmation",
        optionC: "Occupancy Affidavit",
        optionD: "zzzzzzzzz",
        correctOption: "optionC"
    },
    {
        question: "<b>True or False: </b>The Wildlife Report, A report that tells the homeowner and the lender if there are any termites found on the property. If there is, usually a termite clearance is needed to show that the problem areas have been addressed.",
        optionA: "zzzzzzzzz",
        optionB: "zzzzzzzzz",
        optionC: "False",
        optionD: "True",
        correctOption: "optionC"
    },
    {
        question: "<b>True or False: </b>In a refinance transaction on a primary residence, the borrower gets three business days (not including Sundays and some holidays) from the day they sign loan documents to cancel the loan if they want. This is a law and cannot be waived. This law is known as -Notice of Right to Cancel-",
        optionA: "False",
        optionB: "True",
        optionC: "zzzzzzzzz",
        optionD: "zzzzzzzzz",
        correctOption: "optionB"
    },
    {
        question: "Document that replaces what used to be called the truth in lending form. Informs the borrower about everything pertinent about the loan; all costs associated with the transaction, just like the <B><strike>REDACTED</strike></B> statement. The lender must <B><strike>REDACTED</strike></B> everything about the loan so the borrower has a concise look at what they are getting in to. This form is a little redundant as it has information found on different forms throughout the loan documents.",
        optionA: "Closing Disclosure",
        optionB: "Open Concealment",
        optionC: "Grant ​Deed/Quitclaim Deed",
        optionD: "Payoff Statement",
        correctOption: "optionA"
    },
    {
        question: "<b>True or False: </b>Washington State Domiciliary Partnership Addendum to Uniform Residential Loan Application is a Document informing the lender that the borrower does or does not have a domestic partner.",
        optionA: "True",
        optionB: "False",
        optionC: "zzzzzzzzz",
        optionD: "zzzzzzzzz",
        correctOption: "optionB"
    },
    {
        question: "This form gives permission to the lender to confirm employment, and have the borrower's assets, credit report and financial records in their possession.",
        optionA: "Grant ​Deed/Quitclaim Deed",
        optionB: "Riders Authentication Certificate",
        optionC: "Borrower Certification and Authorization",
        optionD: "Credit Report",
        correctOption: "optionC"
    },
    {
        question: "Properties with mortgages must have <B><strike>REDACTED</strike></B> insurance. This form also allows the lender to be the loss payee.",
        optionA: "zzzzzzzzz",
        optionB: "Force-placed Insurance and Consumer Qualifications",
        optionC: "Homeowners Insurance and Requirements",
        optionD: "Hazard Insurance Authorization and Requirements",
        correctOption: "optionD"
    },
    {
        question: "Required document in order for the borrower to deduct interest paid on their mortgage loan.",
        optionA: "W-9",
        optionB: "W-10",
        optionC: "W-8",
        optionD: "W-4506",
        correctOption: "optionA"
    },
    {
        question: "This document informs the borrower that if anything else needs to be signed before the loan funds, the borrower will comply with any requests.",
        optionA: "Consumer Credit Score Disclosure",
        optionB: "Statement of Information (S.I.)",
        optionC: "Compliance Agreement",
        optionD: "Deed of Trust",
        correctOption: "optionC"
    },
    {
        question: "Document that gives the borrower their credit score, and discloses that the borrower has the right to know their credit score.",
        optionA: "Compliance Agreement",
        optionB: "Statement of Information (S.I.)",
        optionC: "Borrower Certification and Authorization",
        optionD: "Consumer Credit Score Disclosure",
        correctOption: "optionD"
    },
    {
        question: "<b>True or False: </b> The Housing Financial Discrimination Act of 2017 Fair Lending Notice is a document that says the borrower was not discriminated against.",
        optionA: "False",
        optionB: "True",
        optionC: "zzzzzzzzz",
        optionD: "zzzzzzzzz",
        correctOption: "optionA"
    },
    {
        question: "The max amount of insurance coverage the lender can require to borrower to have is replacement cost of the house. Not the appraised value.",
        optionA: "California per Diem Insurance Disclosure",
        optionB: "Hazard Insurance Disclosure",
        optionC: "Accidental Insurance Concealment",
        optionD: "California Insurance Disclosure/Waiver",
        correctOption: "optionB"
    },
    {
        question: "This document states whether the borrower has to have an impound/escrow account or if they request to have one, or decline to have one.",
        optionA: "Hazard Insurance Disclosure",
        optionB: "California per Diem Interest Disclosure",
        optionC: "California Impound Disclosure/Waiver",
        optionD: "Hazard Insurance Disclosure",
        correctOption: "optionC"
    },
    {
        question: "The borrower confirms all contact information the lender has for them is correct; mailing address, phone numbers, etc.",
        optionA: "Contact Verification Form",
        optionB: "Association Confirmation Form",
        optionC: "Credit Report",
        optionD: "Tenant/Mortgagee History Report",
        correctOption: "optionA"
    },
    {
        question: "<b>True or False: </b>Counseling Checklist for Military Home Buyers is a VA document informing the veteran that if they miss any payments, home counseling may be required. Essentially the counseling is letting them know how bad foreclosure is and they should not miss more payments.",
        optionA: "False",
        optionB: "True",
        optionC: "zzzzzzzzz",
        optionD: "zzzzzzzzz",
        correctOption: "optionB"
    },
    {
        question: "This document is where the notary signing agent records for the lender the ID information used to identify the borrower.",
        optionA: "USA Freedom Act ",
        optionB: "USA Treasury Act",
        optionC: "USA Patriot Act",
        optionD: "USA Partisan Act",
        correctOption: "optionC"
    },
    {
        question: "This document lets the borrower know that their credit score was a determining factor on their approval. Also, that the lender can discriminate based on credit score. Bad credit equals a higher interest rate.",
        optionA: "Credit Report",
        optionB: "USA Patriot Act",
        optionC: "California per Diem Credit Notice",
        optionD: "Federal Equal Credit Opportunity Act Notice",
        correctOption: "optionD"
    },
    {
        question: "Flood zones are constantly being updated all over the country. The lender is letting the borrower know that if the property is ever rezoned as a flood zone they will be required to have flood insurance.",
        optionA: "Flood Insurance Coverage Subject to Change Disclosure",
        optionB: "Hazard Insurance Coverage Subject to Change Disclosure",
        optionC: "Safety Insurance Coverage Subject to Change Disclosure",
        optionD: "Car Insurance",
        correctOption: "optionA"
    }
]



let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

let wrongAnswers = [] // empty array that wrong answers will be added to.
let wrongQuestions = [] // empty array that wrong questions will be added to. This is used for display at the end

// function for displaying next question in the array to dom
function NextQuestion(index) {
	document.getElementById("option-one-label").style.display='block';
	document.getElementById("option-two-label").style.display='block';
	document.getElementById("option-three-label").style.display='block';
	document.getElementById("option-four-label").style.display='block';
	
	
	document.getElementById('score-modal').style.display = "none"
	
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;


	if (document.getElementById("option-one-label").innerHTML === "zzzzzzzzz")
		document.getElementById("option-one-label").style.display='none';
	if (document.getElementById("option-two-label").innerHTML === "zzzzzzzzz")
		document.getElementById("option-two-label").style.display='none';
	if (document.getElementById("option-three-label").innerHTML === "zzzzzzzzz")
		document.getElementById("option-three-label").style.display='none';
	if (document.getElementById("option-four-label").innerHTML === "zzzzzzzzz")
		document.getElementById("option-four-label").style.display='none';
}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {

        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "rgba(51, 222, 51, 0.5)"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(correctOption).style.backgroundColor = "rgba(51, 222, 51, 0.5)"
            wrongAttempt++
            indexNumber++
			

			wrongQuestions.push(currentQuestion.question)
			
			if (currentQuestion.correctOption === "optionA")
				wrongAnswers.push(currentQuestion.optionA)
			else if (currentQuestion.correctOption === "optionB")
				wrongAnswers.push(currentQuestion.optionB)
			else if (currentQuestion.correctOption === "optionC")
				wrongAnswers.push(currentQuestion.optionC)
			else if (currentQuestion.correctOption === "optionD")
				wrongAnswers.push(currentQuestion.optionD)
			
			
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
	
	
	
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
		
    }, 1000);
	
	
}


// This first started out as just a lazy way to change the bg color. But I ran into this problem where 
// when trying to select a button, it wouldn't select while the mouse is moving. that's why I lazy
// added the checked=true to help out with drag clicks.
function changeLabelBG1() {
	document.getElementById("option-one-label").style.backgroundColor='rgba(255, 255, 255, 0.5)';
	document.getElementById("option-two-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-three-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-four-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-one").checked=true;
}
function changeLabelBG2() {
	document.getElementById("option-one-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-two-label").style.backgroundColor='rgba(255, 255, 255, 0.5)';
	document.getElementById("option-three-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-four-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-two").checked=true;
}
function changeLabelBG3() {
	document.getElementById("option-one-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-two-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-three-label").style.backgroundColor='rgba(255, 255, 255, 0.5)';
	document.getElementById("option-four-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-three").checked=true;
}
function changeLabelBG4() {
	document.getElementById("option-one-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-two-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-three-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-four-label").style.backgroundColor='rgba(255, 255, 255, 0.5)';
	document.getElementById("option-four").checked=true;
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "<B>Bad, Keep Practicing.</B>"
        remarkColor = "#e98080"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "<B>Average babe, You can do better.</B>"
        remarkColor = "#f2b681"
    }
    else if (playerScore >= 7) {
        remark = "<B>Excellent work babe!!</B>"
        remarkColor = "#81f281"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "block"
	document.getElementById('mainQuiz').style.display = "none"
	
	document.getElementById('wrongQuestion').innerHTML = ""
	
	for (let i = 0; i < wrongQuestions.length; i++) {
		document.getElementById('wrongQuestion').innerHTML += wrongQuestions[i] + "<br />"
		document.getElementById('wrongQuestion').innerHTML += "<b>" + wrongAnswers[i] + "</b><br /><br />"
	}
	
	
	wrongQuestions[0]

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
	document.getElementById('mainQuiz').style.display = "block"
	wrongQuestions = []
	wrongAnswers = []
	
	console.log(wrongAnswers.length)
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}