<!DOCTYPE html>
<html>
<head>
<title>My Fist PHP</title>
</head>
<body>
    <h1>
    <?php 
        $nama="Zarif"; //Declare name
        echo "My name is $nama";
    ?>
    </h1>

    <?php
        echo "Welcome to my First Web Application";
    ?>
    <br><br>

    <?php
        echo " <u> Like to learn about Web Programming </u>";
    ?>
    <br><br>

    <?php
        echo "Someday I will become a good";
    ?>

    <h1>
    <?php 
        echo "PROGRAMMER";
    ?>
</h1>

    <?php
        $nama = "Ali"; //String
        $umur = 11; // int
        $berat = 30.5;// float
        $murid = "true" ;// bool
        // Display output
        echo $nama."<br>";
        echo $umur."<br>";
        echo "$berat <br>";
    ?>

    <?php
        $nama = "Zarif";
        $age = 12;

        echo "Nama $nama <br>"; //ouput -- Nama Zarif
        echo 'Nama $nama <br>'; //output -- Nama $nama
        echo 'I am ' . $age . 'years old'."<br>";
    ?>

    <?php
        //String 
        $nama1 = "Nazrul";
        $nama2 = "Arif";
        $nama3 = "syaqad";
        $nama4 = "Meon";
        $nama5 = "Bun";
        

        // Integer
        $umur1 = 50;
        $umur2 = 45;
        $umur3 = 20;
        $umur4 = 17;
        $umur5 = 12;

    ?>
<br>
        <table border=-1>
            <tr>
                <th> String Variable </th>
                <th> Integer Variable </th>
            </tr>

            <tr>
                <td><?php echo $nama1;?> </td>
                <td><?php echo $umur1;?> </td>
            </tr>
            <tr>
                <td><?php echo $nama2;?> </td>
                <td><?php echo $umur2;?> </td>
            </tr>
            <tr>
                <td><?php echo $nama3;?> </td>
                <td><?php echo $umur3;?> </td>
            </tr>
            <tr>
                <td><?php echo $nama4;?> </td>
                <td><?php echo $umur4;?> </td>
            </tr>
            <tr>
                <td><?php echo $nama5;?> </td>
                <td><?php echo $umur5;?> </td>
            </tr>

                



       
    

</body>
</html>
