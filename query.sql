SELECT * FROM DIVISIONES  D INNER JOIN ( 
	SELECT 	ID_DIVISION, COUNT( ID_DIVISION) FROM GRUPOS 
	GROUP BY ID_DIVISION 

) G ON D.ID_DIVISION = G.ID_DIVISION