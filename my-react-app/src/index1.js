let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
     body magic {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      magic code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
      
        magic .page-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            text-align: center;
            background-color: #3498db;
            color: #fff;
            padding: 20px;
        }
        magic h1 {
            font-size: 2em;
            font-weight: bold;
        }
         body magic {
            padding-top: 70px;
        }
        magic li {
            list-style: none;
            margin: 20px 0;
            border: 2px solid #3498db; /* Border color */
            border-radius: 10px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
            padding: 15px;
            background-color: #f2f2f2; /* Background color */
        }

        magic strong {
            font-size: 1.2em;
            font-weight: bold;
            color: #e74c3c; /* Text color */
        }

        magic .radio {
            margin-top: 10px;
        }

        magic label {
            display: block;
            margin-bottom: 5px;
        }

        magic input[type="radio"] {
            margin-right: 10px;
        }
        magic .hidden {
            display: none;
        }

        magic .text-center {
            text-align: center;
        }

        magic .pull-left-up {
            float: left;
        }

        magic .pull-right-up {
            float: right;
        }

        magic #results {
            background-color: #f2f2f2;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
            margin-top: 20px;
        }

        magic .badge {
            background-color: #3498db;
            color: #fff;
            padding: 5px;
            border-radius: 5px;
        }

        magic #type {
            font-size: 1.5em;
            font-weight: bold;
        }

        magic #type-details {
            margin-top: 20px;
            font-size: 1.2em;
        }

        magic #type-title {
            font-size: 1.2em;
            font-weight: bold;
        }

        magic #type-percentage {
            font-weight: bold;
            color: #e74c3c;
        }

        magic #type-description {
            margin-top: 10px;
        }

        magic #type-site {
            text-decoration: none;
            color: #3498db;
        }

        magic #type-site:hover {
            text-decoration: underline;
        }

        magic .progress {
            margin-top: 10px;
        }

        magic .progress-bar {
            border-radius: 5px;
        }

        magic .center-bar {
            height: 10px;
        }

        magic .clearfix {
            clear: both;
        }

        magic #scroll-down {
            font-size: 1em;
        }

        magic #submit {
            background-color: #3498db;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 1.2em;
        }

        magic #submit:hover {
            background-color: #e74c3c;
        }
    </style>
</head>

<body>
   

<magic>

    <div class="container">
        <div>
            <h1>I ...</h1>
        </div>
        <ol>
            <li>
                <strong>Am the life of the party:</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q11" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q11" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q11" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q11" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q11" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Feel little concern for others.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q2" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q2" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q2" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q2" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q2" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Am always prepared</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q3" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q3" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q3" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q3" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q3" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong> Get stressed out easily</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q4" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q4" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q4" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q4" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q4" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Have a rich vocabulary.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q5" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q5" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q5" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q5" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q5" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Don't talk a lot.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q6" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q6" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q6" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q6" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q6" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Am interested in people</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q7" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q7" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q7" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q7" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q7" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Leave my belongings around.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q8" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q8" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q8" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q8" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q8" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Am relaxed most of the time</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q9" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q9" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q9" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q9" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q9" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Have difficulty understanding abstract ideas</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q10" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q10" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q10" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q10" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q10" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Feel comfortable around people.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q12" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q12" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q12" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q12" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q12" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Insult people.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q13" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q13" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q13" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q13" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q13" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong> Pay attention to details</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q14" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q14" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q14" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q14" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q14" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Worry about things.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q15" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q15" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q15" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q15" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q15" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong> Have a vivid imagination.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q16" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q16" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q16" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q16" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q16" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong> Keep in the background.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q17" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q17" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q17" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q17" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q17" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong> Sympathize with others' feelings.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q18" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q18" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q18" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q18" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q18" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Make a mess of things</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q19" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q19" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q19" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q19" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q19" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong> Seldom feel blue.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q20" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q20" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q20" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q20" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q20" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Am not interested in abstract ideas.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q21" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q21" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q21" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q21" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q21" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Start conversations</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q22" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q22" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q22" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q22" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q22" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Am not interested in other people's problems.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q23" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q23" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q23" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q23" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q23" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Get chores done right away.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q24" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q24" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q24" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q24" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q24" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong> Am easily disturbed</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q25" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q25" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q25" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q25" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q25" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Have excellent ideas</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q26" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q26" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q26" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q26" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q26" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Have little to say</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q27" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q27" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q27" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q27" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q27" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong> Have a soft heart.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q28" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q28" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q28" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q28" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q28" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Often forget to put things back in their proper place</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q29" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q29" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q29" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q29" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q29" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Get upset easily.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q30" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q30" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q30" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q30" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q30" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong> Do not have a good imagination</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q31" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q31" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q31" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q31" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q31" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong> Talk to a lot of different people at parties</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q32" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q32" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q32" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q32" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q32" value="5"> Agree
                    </label>
                </div>
            </li>

            <li><strong>Am not really interested in others.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q33" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q33" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q33" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q33" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q33" value="5"> Agree
                    </label>
                </div>
            </li>

            <li><strong>Like order.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q34" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q34" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q34" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q34" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q34" value="5"> Agree
                    </label>
                </div>
            </li>

            <li><strong> Change my mood a lot.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q35" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q35" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q35" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q35" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q35" value="5"> Agree
                    </label>
                </div>
            </li>

            <li><strong> Am quick to understand things.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q36" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q36" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q36" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q36" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q36" value="5"> Agree
                    </label>
                </div>
            </li>

            <li><strong> Don't like to draw attention to myself.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q37" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q37" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q37" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q37" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q37" value="5"> Agree
                    </label>
                </div>
            </li>

            <li><strong>Take time out for others.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q38" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q38" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q38" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q38" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q38" value="5"> Agree
                    </label>
                </div>
            </li>

            <li><strong> Shirk my duties.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q39" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q39" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q39" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q39" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q39" value="5"> Agree
                    </label>
                </div>
            </li>

            <li><strong>Have frequent mood swings.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q40" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q40" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q40" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q40" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q40" value="5"> Agree
                    </label>
                </div>
            </li>

            <li><strong> Use difficult words</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q41" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q41" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q41" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q41" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q41" value="5"> Agree
                    </label>
                </div>
            </li>

            <li><strong> Don't mind being the center of attention.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q42" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q42" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q42" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q42" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q42" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Feel others' emotions</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q43" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q43" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q43" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q43" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q43" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Follow a schedule.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q44" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q44" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q44" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q44" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q44" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong> Get irritated easily</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q45" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q45" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q45" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q45" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q45" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong> Spend time reflecting on things.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q46" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q46" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q46" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q46" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q46" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong> Am quiet around strangers.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q47" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q47" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q47" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q47" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q47" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Make people feel at ease.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q48" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q48" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q48" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q48" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q48" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong> Am exacting in my work</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q49" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q49" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q49" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q49" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q49" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Often feel blue.</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q50" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q50" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q50" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q50" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q50" value="5"> Agree
                    </label>
                </div>
            </li>

            <li>
                <strong>Am full of ideas</strong><br>
                <div class="radio">
                    <label>
                        <input type="radio" name="q51" value="1"> Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q51" value="2"> Slightly Disagree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q51" value="3"> Neutral
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q51" value="4"> Slightly Agree
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="q51" value="5"> Agree
                    </label>
                </div>
            </li>

        </ol>

        <p></p>
        <p id="scroll-down" class="hidden text-center pull-left-up">(<i>scroll down</i>)</p>
        <p class="text-center pull-left-up"><button onclick="!function(){console.log('asdasd');(function(){let t,u,o,s,p,n,e,c,r,l,a,i,m,d;return{processForm:function(){t=u=o=s=p=n=e=c=0,d='',r=20,l=14,a=14,i=38,m=8,function(){const t=document.getElementsByTagName('input');outputs=[],outputs.push(0);let u=0,o=0;Array.prototype.forEach.call(t,(function(t){t.checked&&(outputs.push(parseInt(t.value)),o=1),u+=1,5==u&&(0==o&&outputs.push(0),u=0,o=0)})),r+=outputs[1]-outputs[6]+outputs[11]-outputs[16]+outputs[21]-outputs[26]+outputs[31]-outputs[36]+outputs[41]-outputs[46],l+=outputs[7]-outputs[2]-outputs[12]+outputs[17]-outputs[22]+outputs[27]-outputs[32]+outputs[37]+outputs[42]+outputs[47],a+=outputs[3]-outputs[8]+outputs[13]-outputs[18]+outputs[23]-outputs[28]+outputs[33]-outputs[38]+outputs[43]-outputs[48],i+=outputs[9]-outputs[4]+outputs[19]-outputs[14]+outputs[29]-outputs[24]+outputs[39]-outputs[34]+outputs[49]-outputs[44],m+=outputs[5]-outputs[10]+outputs[15]-outputs[20]+outputs[25]-outputs[30]+outputs[35]-outputs[40]+outputs[45]-outputs[50],console.log(r,l,a,i,m),window.testResults=[r,l,a,i,m],document.body.innerHtml=''}()}}})().processForm();window.afterTest()}();" id="submit" class="btn btn-primary btn-lg">Calculate Results</button></p>
        <div id="results" class="text-center hidden pull-left-up">
            <br><br>
            <h2 id="type"></h2>
            <p id="type-details" class="type-description hidden">
                <strong id="type-title"></strong><br>
                <strong><span id="type-percentage"></span> of population</strong><br>
                <span id="type-description"></span><br>
                <a id="type-site" href="#" target="_blank">Learn more about your type here</a>
            </p>
            <p class="pull-left"><span class="badge">E</span> (<span id="eScore"></span>%)</p>
            <p class="pull-right">(<span id="iScore"></span>%) <span class="badge">I</span></p>
            <div class="progress">
                <div id="eiChart" class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100" style="width: 50%"></div>
                <div class="center-bar"></div>
            </div>
            <br class="clearfix">

            <p class="pull-left"><span class="badge">S</span> (<span id="sScore"></span>%)</p>
            <p class="pull-right">(<span id="nScore"></span>%) <span class="badge">N</span></p>
            <div class="progress">
                <div id="snChart" class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100" style="width: 50%"></div>
                <div class="center-bar"></div>
            </div>
            <br class="clearfix">

            <p class="pull-left"><span class="badge">T</span> (<span id="tScore"></span>%)</p>
            <p class="pull-right">(<span id="fScore"></span>%) <span class="badge">F</span></p>
            <div class="progress">
                <div id="tfChart" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100" style="width: 50%"></div>
                <div class="center-bar"></div>
            </div>
            <br class="clearfix">

            <p class="pull-left"><span class="badge">J</span> (<span id="jScore"></span>%)</p>
            <p class="pull-right">(<span id="pScore"></span>%) <span class="badge">P</span></p>
            <div class="progress">
                <div id="jpChart" class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100" style="width: 50%"></div>
                <div class="center-bar"></div>
            </div>
            <br class="clearfix">
        </div>

    </div>
</magic>

<script type="text/javascript">
window.magic2=function(){
    console.log("asdasd")
    const MbtiModule = (function () {
        let types = {
            ISTJ: {
                title: "The Traditionalist",
                percentage: "13.7%",
                description: "Dutiful, Practical, Logical, Methodical",
                site: "http://www.personalitypage.com/html/ISTJ.html"
            },
            ISFJ: {
                title: "The Protector",
                percentage: "12.7%",
                description: "Dutiful, Practical, Supportive, Meticulous",
                site: "http://www.personalitypage.com/html/ISFJ.html"
            },
            INFJ: {
                title: "The Guide",
                percentage: "1.7%",
                description: "Devoted, Innovative, Idealistic, Compassionate",
                site: "http://www.personalitypage.com/html/INFJ.html"
            },
            INTJ: {
                title: "The Visionary",
                percentage: "1.4%",
                description: "Independent, Innovative, Analytical, Purposeful",
                site: "http://www.personalitypage.com/html/INTJ.html"
            },
            ISTP: {
                title: "The Problem-Solver",
                percentage: "6.4%",
                description: "Expedient, Practical, Objective, Adaptable",
                site: "http://www.personalitypage.com/html/ISTP.html"
            },
            ISFP: {
                title: "The Harmonizer",
                percentage: "6.1%",
                description: "Tolerant, Realistic, Harmonious, Adaptable",
                site: "http://www.personalitypage.com/html/ISFP.html"
            },
            INFP: {
                title: "The Humanist",
                percentage: "3.2%",
                description: "Insightful, Innovative, Idealistic, Adaptable",
                site: "http://www.personalitypage.com/html/INFP.html"
            },
            INTP: {
                title: "The Conceptualizer",
                percentage: "2.4%",
                description: "Questioning, Innovative, Objective, Abstract",
                site: "http://www.personalitypage.com/html/INTP.html"
            },
            ESTP: {
                title: "The Activist",
                percentage: "5.8%",
                description: "Energetic, Practical, Pragmatic, Spontaneous",
                site: "http://www.personalitypage.com/html/ESTP.html"
            },
            ESFP: {
                title: "The Fun-Lover",
                percentage: "8.7%",
                description: "Spontaneous, Practical, Friendly, Harmonious",
                site: "http://www.personalitypage.com/html/ESFP.html"
            },
            ENFP: {
                title: "The Enthusiast",
                percentage: "6.3%",
                description: "Optimistic, Innovative, Compassionate, Versatile",
                site: "http://www.personalitypage.com/html/ENFP.html"
            },
            ENTP: {
                title: "The Entrepreneur",
                percentage: "2.8%",
                description: "Risk-Taking, Innovative, Outgoing, Adaptable",
                site: "http://www.personalitypage.com/html/ENTP.html"
            },
            ESTJ: {
                title: "The Coordinator",
                percentage: "10.4%",
                description: "Organized, Practical, Logical, Outgoing",
                site: "http://www.personalitypage.com/html/ESTJ.html"
            },
            ESFJ: {
                title: "The Supporter",
                percentage: "12.6%",
                description: "Friendly, Practical, Loyal, Organized",
                site: "http://www.personalitypage.com/html/ESFJ.html"
            },
            ENFJ: {
                title: "The Developer",
                percentage: "2.8%",
                description: "Friendly, Innovative, Supportive, Idealistic",
                site: "http://www.personalitypage.com/html/ENFJ.html"
            },
            ENTJ: {
                title: "The Reformer",
                percentage: "2.9%",
                description: "Determined, Innovative, Strategic, Outgoing",
                site: "http://www.personalitypage.com/html/ENTJ.html"
            }
        };
        let e, i, s, n, t, f, j, p;
        let ex, ag, co, ne, op;
        let type;

        function resetScores() {
            e = i = s = n = t = f = j = p = 0;
            type = "";
            ex = 20; ag = 14; co = 14; ne = 38; op = 8;
        }

        function getScores() {
            const inputs = document.getElementsByTagName("input");
            outputs = []
            outputs.push(0)
            let h = 0;
            let flag = 0;
            Array.prototype.forEach.call(inputs, function (input) {
                if(input.checked){
                    outputs.push(parseInt(input.value))
                    flag = 1;
                }
                h += 1
                if (h == 5){
                    if (flag == 0){
                        outputs.push(0)
                    }
                    h = 0
                    flag = 0
                }
            });
            // console.log(outputs)
            ex += outputs[1] - outputs[6] + outputs[11] - outputs[16] + outputs[21] - outputs[26] + outputs[31] - outputs[36] + outputs[41] - outputs[46]
            ag += outputs[7] - outputs[2] - outputs[12] + outputs[17] - outputs[22] + outputs[27] - outputs[32] + outputs[37] + outputs[42] + outputs[47]
            co += outputs[3] - outputs[8] + outputs[13] - outputs[18] + outputs[23] - outputs[28] + outputs[33] - outputs[38] + outputs[43] - outputs[48]
            ne += outputs[9] - outputs[4] + outputs[19] - outputs[14] + outputs[29] - outputs[24] + outputs[39] - outputs[34] + outputs[49] - outputs[44]
            op += outputs[5] - outputs[10] + outputs[15] - outputs[20] + outputs[25] - outputs[30] + outputs[35] - outputs[40] + outputs[45] - outputs[50]
            console.log(ex, ag, co, ne, op)
            document.body.innerHtml=""
        }

        function calculatePercentages() {
            e = Math.floor((e / 10) * 100);
            i = Math.floor((i / 10) * 100);
            s = Math.floor((s / 20) * 100);
            n = Math.floor((n / 20) * 100);
            t = Math.floor((t / 20) * 100);
            f = Math.floor((f / 20) * 100);
            j = Math.floor((j / 20) * 100);
            p = Math.floor((p / 20) * 100);
        }

        function createCharts() {
            document.querySelector("#eScore").innerHTML = e;
            document.querySelector("#iScore").innerHTML = i;
            document.querySelector("#sScore").innerHTML = s;
            document.querySelector("#nScore").innerHTML = n;
            document.querySelector("#tScore").innerHTML = t;
            document.querySelector("#fScore").innerHTML = f;
            document.querySelector("#jScore").innerHTML = j;
            document.querySelector("#pScore").innerHTML = p;

            document.querySelector("#eiChart").style.marginLeft = i / 2 + "%";
            document.querySelector("#snChart").style.marginLeft = n / 2 + "%";
            document.querySelector("#tfChart").style.marginLeft = f / 2 + "%";
            document.querySelector("#jpChart").style.marginLeft = p / 2 + "%";
        }

        function showResults() {
            type += e >= i ? "E" : "I";
            type += s >= n ? "S" : "N";
            type += t >= f ? "T" : "F";
            type += j >= p ? "J" : "P";
            document.querySelector("#type").innerHTML = type;
            document.querySelector("#type-title").innerHTML = types[type].title;
            document.querySelector("#type-percentage").innerHTML =
                types[type].percentage;
            document.querySelector("#type-description").innerHTML =
                types[type].description;
            document.querySelector("#type-site").href = types[type].site;

            document.querySelector("#type-details").classList.remove("hidden");
            document.querySelector("#scroll-down").classList.remove("hidden");
            document.querySelector("#results").classList.remove("hidden");
        }

        return {
            processForm: function () {
                resetScores();
                getScores();
                // calculatePercentages();
                // createCharts();
                // showResults();
            }
        };
    })();

    // function initialize() {
    //     console.log("init")
    //     document.querySelector("#submit").addEventListener("click", function () {
    //         console.log(1);
    //         MbtiModule.processForm();
    //     });
    // }

    // document.addEventListener("DOMContentLoaded", initialize);
    MbtiModule.processForm();
}
</script>
</body>

</html>`


html = { __html: html }
export { html }