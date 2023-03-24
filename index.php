<!DOCTYPE html>
<html lang="pt-BR">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="/assets/style.css">

    <!-- Spin.js -->
    <link rel="stylesheet" href="assets/_css/spiin.css">
    <script src="vendor/spin.js"></script>

    <title> Sorte.io | Quem será o escolhido? </title>

    <script src="/assets/checkNames.js"></script>
    <script src="/assets/actionJS.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/spin.js/2.3.2/spin.min.js"></script>

</head>

<body>

    <?php include('includes/header.php'); ?>

    <main>

        <hr>
        <?php echo ">>> CONTEÚDO AQUI <<<" ?> 

        <?php include('includes/body_main_form_page.php');  ?>
        <hr>

    </main>

    <?php include('includes/footer.php'); ?>

<script>
// show Spinner.
var target = document.getElementByTagName("main")[0];
var spinner = new Spinner().spin(target);
</script> 

</body>

</html>
