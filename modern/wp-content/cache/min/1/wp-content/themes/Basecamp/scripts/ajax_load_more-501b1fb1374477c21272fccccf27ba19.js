jQuery('document').ready(function(){var posttype=jQuery('#ajax-content').attr('post_type');var show_per_load=jQuery('#ajax-content').attr('per_page');var ajaxurl=script_vars.ajax_url;var clicked=0;jQuery('body').on('click','.ajx-load-more-link',function(event){jQuery('.load-more-wrp').remove();event.preventDefault();clicked=clicked+1;jQuery.ajax({type:'POST',url:ajaxurl,data:{'action':'get_ajaxposts','clicked':clicked,'posttype':posttype,'show_per_load':show_per_load,},success:function(data){jQuery('.hidden_wrp').remove();jQuery('.ajx-load-more-area').remove();var offset=clicked*parseInt(show_per_load);if(data!=0){jQuery('#ajax-content').append(data);var all_count=parseInt(jQuery('#all_records_count').val());var to_count=0;if((all_count-parseInt(offset))<parseInt(show_per_load)){to_count=parseInt(offset)+(parseInt(jQuery('#all_records_count').val())-parseInt(offset))}else{to_count=parseInt(offset)+parseInt(show_per_load)}
if((parseInt(jQuery('#all_records_count').val())-to_count)<=0){jQuery('.ajx-load-more-area').fadeOut('slow')}}},error:function(errorThrown){}})})})