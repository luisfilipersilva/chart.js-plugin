<?php
//$operadora -> array with the data of he class 'operadora'
//$ths->_terminal > class 'terminal' variable


foreach ($operadoras as $this->_terminal) {
			
			$operadora = $this->_terminal->getOperadora( );
			$nome_operadora = $this->_terminal->nomeoperadoras( $operadora );
			$cor = $this->_terminal->color( $nome_operadora );
			
			if($cor == '')
			{
				$cor = 'FFFFFF';
			}
			
// this codde generate the javascipt variable based on the '$operadora' data			
			$val.=  "{";
			$val.="value:".$this->_terminal->getParticipacao().",";
			$val.="label:'".$this->_terminal->getOperadora()."',";
			$val.="color:'#".$cor."'},";
		}
?>
