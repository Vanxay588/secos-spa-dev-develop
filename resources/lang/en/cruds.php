<?php

return [
    'userManagement' => [
        'title'          => 'User management',
        'title_singular' => 'User management',
    ],
    'permission' => [
        'title'          => 'Permissions',
        'title_singular' => 'Permission',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'title'             => 'Title',
            'title_helper'      => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'role' => [
        'title'          => 'Roles',
        'title_singular' => 'Role',
        'fields'         => [
            'id'                 => 'ID',
            'id_helper'          => ' ',
            'title'              => 'Title',
            'title_helper'       => ' ',
            'permissions'        => 'Permissions',
            'permissions_helper' => ' ',
            'created_at'         => 'Created at',
            'created_at_helper'  => ' ',
            'updated_at'         => 'Updated at',
            'updated_at_helper'  => ' ',
            'deleted_at'         => 'Deleted at',
            'deleted_at_helper'  => ' ',
        ],
    ],
    'user' => [
        'title'          => 'Users',
        'title_singular' => 'User',
        'fields'         => [
            'id'                       => 'ID',
            'id_helper'                => ' ',
            'name'                     => 'Name',
            'name_helper'              => ' ',
            'email'                    => 'Email',
            'email_helper'             => ' ',
            'email_verified_at'        => 'Email verified at',
            'email_verified_at_helper' => ' ',
            'password'                 => 'Password',
            'password_helper'          => ' ',
            'roles'                    => 'Roles',
            'roles_helper'             => ' ',
            'remember_token'           => 'Remember Token',
            'remember_token_helper'    => ' ',
            'created_at'               => 'Created at',
            'created_at_helper'        => ' ',
            'updated_at'               => 'Updated at',
            'updated_at_helper'        => ' ',
            'deleted_at'               => 'Deleted at',
            'deleted_at_helper'        => ' ',
            'surname'                  => 'Surname',
            'surname_helper'           => ' ',
            'gender'                   => 'Gender',
            'gender_helper'            => ' ',
            'date_of_birth'            => 'Date Of Birth',
            'date_of_birth_helper'     => ' ',
        ],
    ],
    'home' => [
        'title'          => 'Home',
        'title_singular' => 'Home',
    ],
    'annoucement' => [
        'title'          => 'Annoucement',
        'title_singular' => 'Annoucement',
        'fields'         => [
            'id'                 => 'ID',
            'id_helper'          => ' ',
            'annoucement'        => 'Annoucement',
            'annoucement_helper' => ' ',
            'name'               => 'Name',
            'name_helper'        => ' ',
            'number'             => 'Number',
            'number_helper'      => ' ',
            'short_name'         => 'Short Name',
            'short_name_helper'  => ' ',
            'allow_date'         => 'Allow Date',
            'allow_date_helper'  => ' ',
            'description'        => 'Description',
            'description_helper' => ' ',
            'created_at'         => 'Created at',
            'created_at_helper'  => ' ',
            'updated_at'         => 'Updated at',
            'updated_at_helper'  => ' ',
            'deleted_at'         => 'Deleted at',
            'deleted_at_helper'  => ' ',
        ],
    ],
    'policyManagement' => [
        'title'          => 'Policy Management',
        'title_singular' => 'Policy Management',
    ],
    'policyCategory' => [
        'title'          => 'Categories',
        'title_singular' => 'Category',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'categories'        => 'Categories',
            'categories_helper' => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'policy' => [
        'title'          => 'Policy',
        'title_singular' => 'Policy',
        'fields'         => [
            'id'                 => 'ID',
            'id_helper'          => ' ',
            'policy'             => 'Policy',
            'policy_helper'      => ' ',
            'name'               => 'Name',
            'name_helper'        => ' ',
            'categories'         => 'Categories',
            'categories_helper'  => ' ',
            'level_no'           => 'Level No',
            'level_no_helper'    => ' ',
            'allow_date'         => 'Allow Date',
            'allow_date_helper'  => ' ',
            'description'        => 'Description',
            'description_helper' => ' ',
            'created_at'         => 'Created at',
            'created_at_helper'  => ' ',
            'updated_at'         => 'Updated at',
            'updated_at_helper'  => ' ',
            'deleted_at'         => 'Deleted at',
            'deleted_at_helper'  => ' ',
        ],
    ],
    'downloadManagement' => [
        'title'          => 'Download Management',
        'title_singular' => 'Download Management',
    ],
    'downloadCategory' => [
        'title'          => 'Categories',
        'title_singular' => 'Category',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'categories'        => 'Categories',
            'categories_helper' => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'download' => [
        'title'          => 'Download',
        'title_singular' => 'Download',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'download'          => 'Download',
            'download_helper'   => ' ',
            'name'              => 'Name',
            'name_helper'       => ' ',
            'categories'        => 'Categories',
            'categories_helper' => ' ',
            'photo'             => 'Photo',
            'photo_helper'      => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'examinationResult' => [
        'title'          => 'Examination Results',
        'title_singular' => 'Examination Result',
        'fields'         => [
            'id'                        => 'ID',
            'id_helper'                 => ' ',
            'academic_years'            => 'Academic Years',
            'academic_years_helper'     => ' ',
            'examination_result'        => 'Examination Result',
            'examination_result_helper' => ' ',
            'name'                      => 'Name',
            'name_helper'               => ' ',
            'created_at'                => 'Created at',
            'created_at_helper'         => ' ',
            'updated_at'                => 'Updated at',
            'updated_at_helper'         => ' ',
            'deleted_at'                => 'Deleted at',
            'deleted_at_helper'         => ' ',
        ],
    ],
    'statisticManagement' => [
        'title'          => 'Statistic Management',
        'title_singular' => 'Statistic Management',
    ],
    'statisticCategory' => [
        'title'          => 'Categories',
        'title_singular' => 'Category',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'categories'        => 'Categories',
            'categories_helper' => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'statistic' => [
        'title'          => 'Statistic',
        'title_singular' => 'Statistic',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'statistic'         => 'Statistic',
            'statistic_helper'  => ' ',
            'name'              => 'Name',
            'name_helper'       => ' ',
            'categories'        => 'Categories',
            'categories_helper' => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'aboutUs' => [
        'title'                      => 'About Us',
        'title_singular'             => 'About Us',
        'structure'                  =>  'Organizational structure',
        'content1'                   => 'ຫ້ອງການກຳມາທິການສຶກສາສົງແຂວງສະຫວັນນະເຂດ ຂຽນຕົວຫຍໍ້ວ່າ “ຫສຂ.ສຂ” ເປັນກົງຈັກບໍລິຫານທີ່ຂື້ນກັບ ພະແນກສຶກສາທິການ ແລະກິລາແຂວງ ແລະ ອົງການພຸດທະສາສະໜາສັມພັນລາວ ເປັນເສນາທິການໃຫ້ແກ່ກຳມາທິການສຶກສາສົງແຂວງ ເຊິ່ງມີພາລະບົດບາດໃນການຄຸ້ມຄອງ, ສົ່ງເສີມ, ຕິດຕາມ, ກວດກາ ແລະ ປະເມີນຜົນການສຶກສາສົງໃຫ້ບັນລຸຕາມຄາດໝາຍທີ່ກຳນົດໄວ້.',
        'content2'                   => 'ໂຄງປະກອບບຸກຄະລາກອນ ຂອງຫ້ອງການກຳມາທິການສຶກສາສົງແຂວງສະຫວັນນະເຂດ',
        'position1'                  =>'1. ຫົວໜ້າຫ້ອງການກຳມາທິການສຶກສາສົງແຂວງ		01 ຕຳແໜ່ງ',
        'position2'                  =>'2. ຮອງຫົວໜ້າຫ້ອງການກຳມາທິການສຶກສາສົງແຂວງ	01 ຕຳແໜ່ງ',
        'position3'                  =>'3. ພະນັກງານວິຊາການ					       03 ຕຳແໜ່ງ',
        'content3'                   =>'(ປັດຈຸບັນພາຍໃນຫ້ອງການກຳມາທິການສຶກສາສົງແຂວງສະຫວັນນະເຂດ ມີພຽງແຕ່ 02 ອົງ/ທ່ານ ຄື: ຫົວໜ້າຫ້ອງການເຊິ່ງເປັນພຣະ ແລະ ຮອງຫົວໜ້າຫ້ອງການເປັນຄະລືຫັດ ຍັງບໍ່ທັນມີພະນັກງານວິຊາການ)',
    ],
    'contactUs' => [
        'title'                      => 'Contact Us',
        'title_singular'             => 'Contact Us',
        'full_location'              => 'Xayyaphoummaram Temple, Kaysone Phomvihane Capital, Savannakhet Province',
        'office_location'            =>  'Office location',
        'phone'                      =>  '02029296649',
        'whatsapp'                   =>  '02029296649',
    ],
];