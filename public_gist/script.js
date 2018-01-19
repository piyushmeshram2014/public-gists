 var app=angular.module("myModule",[])
                        .controller("myController",function($scope,$http){
				$scope.pn=-1;
				$scope.temp="Loading";
				$scope.url="https://api.github.com/gists/public?page="
	$scope.next=function(){			
						$scope.pn++;
						var url="https://api.github.com/gists/public?page="+$scope.pn;
						$scope.temp="Loading";
						$scope.url=url;
						$scope.result();
						
				}
	$scope.prev=function(){
					$scope.pn--;
					var url="https://api.github.com/gists/public?page="+$scope.pn;
					$scope.temp="Loading";
					$scope.url=url;
					$scope.result();
					
				}
				
	$scope.result=function(){ 
	$http.get($scope.url).then(function(response)
		{ var ob=response.data;
		var ind=0,s;
         var disp=[];
    	for(x in ob){
    			ind++;
    			st = "<tr>";
    			st+="<td>"+ind+"</td>";
    			var l1="none";
                var u1="";var f1=0;
    			for (y in ob[x].owner)
        			{	
        				if(y=="login")
	        			{	l1= ob[x].owner[y];
	        				f1=1;
	        			}
					
        			}
        			st+="<td>"+l1+"</td>";
        			var ds="";
        			
        			ds=ob[x].description;
        			if(ds==null ||ds=="")
        				ds="NO DESCRIPTION";
        			
        
                    s=(ob[x].updated_at).substr(0,10);
        			disp.push({login:l1 ,des:ds, upd:s,html_url:ob[x].html_url});
        			
		    	}
				
				$scope.temp=disp;
		});
				
    }
	
});

					
                
				
             
